import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "ap-northeast-1" });

async function handlePost(req, res) {
  const text = req.body.text;
  await client.send(
    new PutItemCommand({
      TableName: "message",
      Item: marshall({
        date: new Date().toISOString().substring(0, 10),
        time: Date.now(),
        text: text,
      }),
    })
  );
  res.status(204).end();
}

async function handleGet(req, res) {
  const messages = await client
    .send(
      new QueryCommand({
        Limit: 10,
        TableName: "message",
        KeyConditionExpression: "#dt = :date and #tm > :time",
        ExpressionAttributeNames: {
          "#dt": "date",
          "#tm": "time",
        },
        ExpressionAttributeValues: {
          ":date": { S: new Date().toISOString().substring(0, 10) },
          ":time": { N: (Date.now() - 1000 * 60).toString() },
        },
        ScanIndexForward: false,
      })
    )
    .then((data) => data.Items.map(unmarshall));
  res.status(200).json(messages);
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    await handlePost(req, res);
  } else if (req.method == "GET") {
    await handleGet(req, res);
  }
}
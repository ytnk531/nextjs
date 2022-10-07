import {
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import * as Pusher from "pusher";

const client = new DynamoDBClient({
  region: "ap-northeast-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
});

async function handlePost(req, res) {
  const text = req.body.text;
  const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: "ap3",
    useTLS: true,
  });

  await client
    .send(
      new PutItemCommand({
        TableName: "message",
        Item: marshall({
          date: new Date().toISOString().substring(0, 10),
          time: Date.now(),
          text: text,
        }),
      })
    )
    .then(() => {
      pusher.trigger("my-channel", "my-event", {
        message: "hello world",
      });
    });
  res.status(204).end();
}

async function handleGet(req, res) {
  const messagePastMs = 1000 * 60 * 10;
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
          ":time": { N: (Date.now() - messagePastMs).toString() },
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

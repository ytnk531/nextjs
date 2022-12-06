import * as contentful from "contentful";

const client = contentful.createClient({
  space: "tiam8ef0kyt9",
  accessToken: process.env.CONTENTFUL_API_KEY,
});
export default client;

import Base from "../components/base";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as contentful from "contentful";

export async function getStaticProps() {
  const c = contentful.createClient({
    space: "tiam8ef0kyt9",
    accessToken: process.env.CONTENTFUL_API_KEY,
  });
  const cc = await c.getEntry("5FZQXLizIuyF4GKmQTyawI");
  return {
    props: {
      components: cc.fields.content,
    },
    revalidate: 10,
  };
}

export default function Res({ components }) {
  return (
    <Base>
      <main className="container mx-auto px-4 my-4">
        <div className="content">{documentToReactComponents(components)}</div>
      </main>
    </Base>
  );
}

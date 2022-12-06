import Base from "../components/base";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import contentful_client from "../modules/contentful";

export async function getStaticProps() {
  const cc = await contentful_client.getEntry("5FZQXLizIuyF4GKmQTyawI");
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

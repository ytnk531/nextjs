import React from "react";
import Link from "next/link";
import Base from "../components/base";
import contentful_client from "../modules/contentful";

export async function getStaticProps() {
  const articles = await contentful_client
    .getEntries({ content_type: "card" })
    .then((response) => {
      return response.items.map((i) => i.fields);
    });
  return {
    props: { articles: articles },
    revalidate: 10,
  };
}

function Article({ title, url }) {
  return (
    <Link href={url}>
      <a
        target="_blank"
        className="h-36
                 min-w-[200px]
                 max-w-[300px]
                 flex-1
                 flex justify-center
                 bg-white
                 block
                 p-2
                 shadow-md shadow-gray-300 rounded-md
                 border-gray-700
                 hover:translate-x-0.5 hover:translate-y-0.5"
      >
        <div className="text-center my-auto">
          <span className="font-bold">{title}</span>
        </div>
      </a>
    </Link>
  );
}

function Articles({ articles }) {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {articles.map(({ url, title }) => {
        return <Article title={title} url={url} key={title} />;
      })}
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <Base>
      <main className="container mx-auto px-4 py-6">
        <section className="">
          <p>エンジニアのわいたなかです。</p>
          <p className="mt-2">
            大学と大学院でコンピューターネットワークを3年間専攻した後、ソフトウェアエンジニアとして5年ほど働いています。
            プロダクトを素早く成長させる方法について考えたり考えなかったりしています。
          </p>
        </section>
        <section className="mt-6">
          <Articles articles={articles} />
        </section>
      </main>
    </Base>
  );
}

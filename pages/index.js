import React from "react";
import Link from "next/link";
import Base from "../components/base";

const articles = [
  {
    title: "Refactoring Kataを使ってRubyのリファクタリングを練習する会",
    url: "https://youtu.be/DA3H-Z778-I",
  },
  {
    title:
      "Refactoring Kataを使ってRubyのリファクタリングを練習する会 テニス編",
    url: "https://youtu.be/jNFULs33hiQ",
  },
  {
    title: "やりすぎないドメイン駆動設計 on Rails",
    url: "https://ytnk531.hatenablog.com/entry/2021/12/27/201927",
  },
  {
    title: "rspecのrspecに学ぶ、シンプルなrspecの書き方",
    url: "https://qiita.com/ytnk531/items/c88dfea3fd46ff704a2f",
  },
  {
    title: "RubyKaigi 2020 予習",
    url: "https://jungle-traffic-1ba.notion.site/RubyKaigi-2022-a15dc34c50194019ba4d5438b0ef63ea",
  },
];

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

function Articles() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {articles.map(({ url, title }) => {
        return <Article title={title} url={url} key={title} />;
      })}
    </div>
  );
}

export default function Home() {
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
          <Articles />
        </section>
      </main>
    </Base>
  );
}

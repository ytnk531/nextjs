import Base from "../components/base";

function Paragraph({ children }) {
  return <p className="mt-3 leading-6">{children}</p>;
}

export default function Res() {
  return (
    <Base>
      <main className="container mx-auto px-4 my-4">
        <section>
          <h2 className="font-bold">要約</h2>
          <Paragraph>
            大学と大学院でコンピューターネットワークを3年間専攻した後、ソフトウェアエンジニアとして5年ほど働いています。現在は、メドピア株式会社で10名程度のエンジニアチームでサーバーサイド開発をしています。フロントエンドの開発も経験があり、インフラ・ミドルウェアについてアーキテクチャ設計や要求の定義を行うこともあります。マネジメントについては、エンジニア3名の開発チームのリーダーの経験があります。
          </Paragraph>
          <Paragraph>
            リファクタリング、オブジェクト指向設計の実践を日ごろから行っており、コードを減らすことや簡単なコードに作り替えることが得意です。大学時代からコンピュータサイエンスを専攻したため、コンピュータやソフトウェアが動く仕組みを正しく理解し、プロダクトに適切な形で技術を応用することが体に染みついています。ジェネラリスト志向で、特定のレイヤにこだわらずにプロダクトや開発業務を改善することに興味があります。
          </Paragraph>
        </section>
      </main>
    </Base>
  );
}

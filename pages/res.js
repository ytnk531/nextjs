import Base from "../components/base";

export async function getStaticProps() {
  let content;
  await fetch("https://ytnk531.microcms.io/api/v1/resume", {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  })
    .then((res) => res.json())
    .then((data) => {
      content = data.content;
    });

  return {
    props: { resume: content },
    revalidate: 10,
  };
}

export default function Res({ resume }) {
  return (
    <Base>
      <main className="container mx-auto px-4 my-4">
        <div
          dangerouslySetInnerHTML={{ __html: resume }}
          className="content"
        ></div>
      </main>
    </Base>
  );
}

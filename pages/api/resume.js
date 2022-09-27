export default async function handler(req, res) {
  let content;
  await fetch("https://ytnk531.microcms.io/api/v1/resume", {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
  })
    .then((res) => res.json())
    .then((data) => {
      content = data;
    });
  res.status(200).json(content);
}

import Base from "../components/base";
import { useEffect, useState } from "react";

export default function Res() {
  const [resume, setResume] = useState(null);
  useEffect(() => {
    fetch("api/resume")
      .then((res) => res.json())
      .then((data) => {
        setResume(data.content);
      });
  }, []);

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

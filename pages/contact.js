import Base from "../components/base";
import Link from "next/link";

export default function Contact() {
  return (
    <Base>
      <main className="container mx-auto px-4 my-4">
        <Link href="https://twitter.com/ytnk531">
          <a className="font-bold text-blue-800">twitter</a>
        </Link>
      </main>
    </Base>
  );
}

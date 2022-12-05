import Base from "../components/base";
import Link from "next/link";

export default function Chat() {
  return (
    <Base>
      <main className="container mx-auto px-4 py-6 flex flex-col h-[90vh]">
        <div>
          <Link href="https://linktr.ee/ytnk531">
            <a className="font-bold text-blue-800">linktree</a>
          </Link>
        </div>
      </main>
    </Base>
  );
}

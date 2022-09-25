import Head from "next/head";
import Link from "next/link";
import React from "react";

function NavLink({ text, href }) {
  return (
    <Link href={href}>
      <a className="text-gray-600 hover:text-black hover:font-bold">{text}</a>
    </Link>
  );
}

function Nav() {
  return (
    <nav className="py-6 bg-gray-200">
      <div className="container mx-auto flex space-x-4 px-4">
        <NavLink href="/" text="自己紹介"></NavLink>
        <NavLink href="/res" text="経歴"></NavLink>
        <NavLink href="/contact" text="連絡先"></NavLink>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-200 py-2">
      <div className="text-center">
        <span>2022 </span>
        <Link href="https://twitter.com/ytnk531">
          <a className="text-blue-800 font-bold" target="_blank">
            Yudai Tanaka
          </a>
        </Link>
      </div>
    </footer>
  );
}

export default function Base({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-[100vh]">
      <Head>
        <title>Yudai Tanaka</title>
        <meta name="description" content="Yudai Tanaka's web site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

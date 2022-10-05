import Base from "../components/base";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetchMessages().then((resp) => {
      resp.json().then((json) => {
        setMessages(json);
      });
    });
  }, []);

  return (
    <Base>
      <main className="container mx-auto px-4 py-6 flex flex-col h-[90vh]">
        <div>
          <Link href="https://twitter.com/ytnk531">
            <a className="font-bold text-blue-800">twitter</a>
          </Link>
        </div>
        <section className="mt-4 overflow-y-scroll">
          <Messages messages={messages} />
        </section>
        <section className="mt-4">
          <Form setMessages={setMessages} />
        </section>
      </main>
    </Base>
  );
}

function fetchMessages() {
  return fetch("api/messages", { method: "GET" });
}

function Messages({ messages }) {
  return (
    <div>
      {[...messages].reverse().map(({ time, text }) => {
        return (
          <div
            className="border-b-2 border-b-gray-100 last:border-b-0 py-2"
            key={time}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
}

function Form({ setMessages }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      text: event.target.text.value,
    };
    await fetch("api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    fetchMessages().then((resp) => {
      resp.json().then((json) => setMessages(json));
    });

    event.target.text.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        className="p-2 block w-full border-2 border-cyan-700 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-200 h-10 rounded font-bold"
      >
        Submit
      </button>
    </form>
  );
}

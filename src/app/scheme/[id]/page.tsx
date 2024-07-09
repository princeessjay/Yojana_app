"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { schemes } from "../data";
import Image from "next/image";

type Message = {
  type: "user" | "ai";
  text: string;
};

type Scheme = {
  id: number;
  title: string;
  description: string;
  steps: string[];
};

const SchemeDetailPage = ({ params }: { params: { id: number } }) => {
  const [scheme, setScheme] = useState<Scheme | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const { id } = params;

  useEffect(() => {
    if (id) {
      const foundScheme = schemes.find(
        (scheme) => scheme.id === parseInt(id.toString())
      );
      setScheme(foundScheme || null);
    }
  }, [id]);

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: userInput },
      ]);
      // Mock AI response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userInput },
          { type: "ai", text: "यह एक नमूना उत्तर है।" },
        ]);
      }, 1000);
      setUserInput("");
    }
  };

  if (!scheme) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-orange-200">
      <Navbar />
      <div className="container mx-auto p-4 h-full">
        <div className="flex flex-row items-center justify-between mb-4 gap-8">
          <div className="flex mt-4 flex-col items-center gap-1 w-1/2">
            <h1 className="text-xl font-bold mb-4">{scheme.title}</h1>
            <p className="mb-4">{scheme.description}</p>
            <h2 className="text-2xl font-bold mb-2">योजना प्राप्त करने के चरण</h2>
            <ul className="list-disc pl-6 mb-8">
              {scheme.steps.map((step, index) => (
                <li key={index} className="mb-2">
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white w-2/3 p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">
              AI सहायक के साथ बातचीत करें
            </h3>
            <div className="h-64 overflow-y-auto border border-gray-300 p-2 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    message.type === "user" ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  <span className="font-bold">
                    {message.type === "user" ? "आप: " : "AI: "}
                  </span>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-l"
                placeholder="संदेश लिखें..."
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r"
              >
                <Image src="/mic.png" alt="Send" width={20} height={20} />
              </button>
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-r ml-1"
              >
                भेजें
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SchemeDetailPage;

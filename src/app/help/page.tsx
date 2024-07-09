"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Message = {
  type: "user" | "ai";
  text: string;
};

export default function HelpPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

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

  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white w-5/6 h-full p-4 rounded shadow-md">
          <h3 className="text-xl font-bold mb-2">
            AI सहायक के साथ बातचीत करें
          </h3>
          <div className="flex flex-row items-center justify-center mb-4 gap-4">
            <div className="h-96 w-3/4 overflow-y-auto border border-gray-300 p-2 mb-4">
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
            <div className="h-full rounded-full overflow-hidden flex flex-col justify-center">
              <Image
                src="/logo.jpg"
                alt="Virtual Assistant"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="flex w-full">
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
      <Footer />
    </>
  );
}

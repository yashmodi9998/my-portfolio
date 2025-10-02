// components/ChatBotLauncher.tsx
"use client";
import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; text: string };

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", text: data.reply }]);
    } catch (err) {
      setMessages([...newMessages, { role: "assistant", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {open && (
        <div className="flex flex-col w-80 h-96 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-2 font-semibold text-white rounded-t-xl"
            style={{ backgroundColor: "#58A2FF" }}
          >
            <span>Ask Yash</span>
            <button onClick={() => setOpen(false)} className="text-white text-lg font-bold">
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50 dark:bg-gray-800"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-3 py-2 rounded-lg max-w-[75%] break-words ${
                    msg.role === "user"
                      ? "text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                  style={msg.role === "user" ? { backgroundColor: "#58A2FF" } : {}}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && <div className="text-gray-500 dark:text-gray-300 text-sm">Typing...</div>}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-900">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#58A2FF] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              placeholder="Ask me about my projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 text-white rounded-r-lg hover:brightness-110 transition"
              style={{ backgroundColor: "#58A2FF" }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-2 w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl text-white hover:brightness-110 transition"
        style={{ backgroundColor: "#58A2FF" }}
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}

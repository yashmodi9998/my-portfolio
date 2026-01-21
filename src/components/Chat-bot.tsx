"use client";
import { Send, X, MessageSquareText } from "lucide-react"; 
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Message = { role: "user" | "assistant"; text: string };

export default function ChatBotLauncher() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Welcome message
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          text: "Hi, I’m **YashBot**! 👋\n\nAsk me about my projects, experience, education, or skills.",
        },
      ]);
    }
  }, [open]);

  const sendMessage = async (msg?: string) => {
    const messageText = msg || input;
    if (!messageText.trim()) return;

    const newMessages: Message[] = [...messages, { role: "user", text: messageText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat-bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="flex flex-col w-80 md:w-96 h-[400px] md:h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out scale-100 opacity-100">
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 text-white rounded-t-2xl relative"
            style={{ backgroundColor: "#6366F1", backgroundImage: "linear-gradient(to right top, #6366f1, #7c7cf4, #9393f7, #a9a9fa, #bfbffa)" }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-lg font-bold text-[#6366F1] shadow-md">
                Y
              </div>
              <span className="font-semibold text-lg">Ask YashBot</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close Chatbot"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm break-words shadow-md ${
                    msg.role === "user"
                      ? "bg-[#6366F1] text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="prose prose-sm dark:prose-invert">
                      <ReactMarkdown>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-center space-x-1 justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-2xl rounded-bl-none shadow-md">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-pulse-delay-0"></span>
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-pulse-delay-150"></span>
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-300 rounded-full animate-pulse-delay-300"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center p-3 border-t border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
            <input
              type="text"
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading}
            />
            <button
              onClick={() => sendMessage()}
              className="ml-3 p-3 bg-[#6366F1] text-white rounded-full shadow-md hover:bg-[#5255d4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Send Message"
              disabled={loading || !input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative mt-4 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white text-2xl bg-[#6366F1] hover:bg-[#5255d4] transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#6366F1]/50"
        aria-label={open ? "Close Chat" : "Open Chat"}
      >
        {open ? <X className="w-7 h-7" /> : <MessageSquareText className="w-7 h-7" />}
        {!open && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        )}
        {!open && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 w-3 h-3 bg-red-500 rounded-full"></span>
        )}
      </button>
    </div>
  );
}
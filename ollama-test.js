// test-ollama.js
import fetch from "node-fetch";

const res = await fetch("http://localhost:11434/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "llama3",
    messages: [
      { role: "system", content: "You are Yash's portfolio assistant." },
      { role: "user", content: "What skills does Yash have?" }
    ],
    stream: false
  })
});

const text = await res.text();
console.log("Raw Ollama response:", text);

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const resumeText = `
Professional Summary:
Full Stack Developer with 3+ years of experience building responsive, high-performance web applications using React, NextJS, Node.js, and PHP. Skilled in creating reusable components, integrating APIs, and optimizing full-stack solutions. Expanding expertise in AI and machine learning for modern web projects.

Technical Skills:
Frontend: HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js
Backend & APIs: Node.js, Express.js, PHP, Laravel, Python, RESTful APIs, JWT, OAuth, Next.js
Databases: MySQL, MongoDB, SQL
Tools & Platforms: Git, GitHub, WordPress, JSON, XML, AJAX, Docker
Machine Learning: Regression, Classification, TensorFlow, PyTorch, Pandas, NumPy, Hugging Face

Professional Experience:
Machine Learning Intern – Waypoint Healthcare, Toronto, ON (Jan 2025 – Apr 2025)
Full Stack Web Developer – Kids World Record Media, Toronto, ON (Apr 2024 – Aug 2024)
Web Developer – Prelax Infotech, Gujarat, India (Nov 2022 – May 2023)
Assistant System Engineer – Tata Consultancy Services, Gujarat, India (Apr 2021 – Oct 2022)
Junior Web Developer – Infozium IT Solutions, Gujarat, India (Oct 2020 – Apr 2021)

Education:
Graduate Certificate in AI & Machine Learning – Humber College, Toronto, ON (Sep 2024 – Apr 2025)
Graduate Certificate in Web Development – Humber College, Toronto, ON (Sep 2023 – Aug 2024)
Bachelor of Engineering in Computer Engineering – CKPCET, Gujarat, India (Aug 2016 – Oct 2020)
`;


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemma-3n-e4b-it" });

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
You are Yash's professional portfolio assistant. 
Use ONLY the information provided in the resume below to answer the user's question. 
Do NOT invent any details or provide information not in the resume. Understand user questions and respond concisely and professionally as Yash would.
Do NOT copy text directly from the resume; rephrase the information naturally and answer concisely and professionally as Yash would.


Resume:
${resumeText}

User question:
${message}

Answer:
`;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    });

    const reply = (await result.response.text())?.trim() || "I don’t know";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat-bot API error:", err);
    return NextResponse.json(
      { reply: "Something went wrong. Check your Gemini API key or usage." },
      { status: 500 }
    );
  }
}


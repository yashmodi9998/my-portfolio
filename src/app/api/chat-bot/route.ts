import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const resumeText = `
Yash Modi
Email:Yashmodi998@gmail.com
Phone: +1 (437) 661- 8091
GitHub:github.com/yashmodi9998
LinkedIn:linkedin.com/in/yashnileshbhaimodi
Location: Toronto, ON, Canada
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
Web Developer – Kids World Record Media, Toronto, ON				Apr 2024 – Aug 2024
•	Designed and deployed scalable TypeScript APIs to integrate external platforms, increasing data flow efficiency by 35% and reducing response time. 
•	Developed React apps using MERN stack and integrated NextJS principles to enhance routing and performance.
•	Integrated RESTful APIs with asynchronous calls to dynamically fetch and update UI data in real time. 
Web Developer - Prelax Infotech, Gujarat, India					Nov 2022 – May 2023
•	Developed and deployed full-stack applications using the MERN stack to meet client-specific functionality needs. 
•	Created and maintained technical documentation for APIs and UI components to support team collaboration.
•	Converted Figma wireframes into functional React components with routing and state management, ensuring feature consistency and cross-device compatibility. 
Assistant System Engineer - Tata Consultancy Services, Gujarat, India		   	Apr 2021 – Oct 2022
•	Designed SAP ABAP reports and billing customized to client business rules, achieving 90% accuracy in output. 
•	Optimized SQL queries by analyzing execution plans and reducing redundancy, which led to a 60% improvement in query performance. 
•	Collaborated in peer code reviews and engaged in pair programming sessions to ensure knowledge sharing and maintain clean, consistent code. 
Junior Web Developer - Infozium It Solutions, Gujarat, India			    	Oct 2020 – Apr 2021
•	Designed a WordPress-based ticket booking platform incorporating WooCommerce and custom PHP logic, increasing online booking traffic by 40%. 
•	Developed MySQL-backed modules for real-time booking updates using AJAX and PHP to ensure data accuracy. 
•	Customized themes and flows using HTML, CSS, and JavaScript, resulting in improved customer satisfaction. 


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
You are Yash Modi's professional portfolio assistant. 
Use ONLY the information provided in the resume below to answer the user's question. 
Do not tell the user that you are an AI model and do not mention the resume.if something is not on resume stat as "I don't know".
Do NOT invent any details or provide information not in the resume. Understand user questions and respond concisely and professionally as Yash would.
Do NOT copy text directly from the resume; rephrase the information naturally and answer concisely and professionally as Yash would.
Write in a approachable and friendly tone, as if you are having a casual conversation with the user.

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


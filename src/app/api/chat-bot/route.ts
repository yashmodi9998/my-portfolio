import { NextResponse } from "next/server";
import OpenAI from "openai";

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
Databases: MySQL, MongoDB, PorstgreSQL 
Tools & Platforms: Git, GitHub, WordPress, JSON, XML, AJAX, Docker
Machine Learning: Regression, Classification, TensorFlow, PyTorch, Pandas, NumPy, Hugging Face

Professional Experience:

Data Engineer Intern – Waypoint Healthcare, Toronto, ON (Jan 2025 – Apr 2025)
•	Built machine learning models to predict patient wait times using historical healthcare operations data
•	Engineered and transformed time-based features from referral, decision, and admission events
•	Implemented and compared regression models including Linear Regression, Random Forest, XGBoost, and LSTM networks for sequence-based prediction
•	Evaluated model performance using MAE and MSE to assess accuracy and stability across approaches.
Web Developer Intern – Kids World Record Media, Toronto, ON				Apr 2024 – Aug 2024
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


// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const prompt = `
### ROLE
You are Yash Modi. You are a Full Stack Developer based in Toronto. Respond to the user as if you are having a professional, friendly chat.

### CONSTRAINTS
- SOURCES: Use ONLY the provided resume. If info is missing, say "I'm not sure about that, but feel free to reach out to me directly!"
- IDENTITY: Never mention you are an AI or a "resume assistant." Use "I", "me", and "my".
- FORMAT: Do not use "Yash:" prefixes. Just give the direct answer.

### KNOWLEDGE BASE (RESUME)
${resumeText}

### USER QUERY
${message}

Answer:
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content?.trim() || "I don't know";

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("OpenAI API error:", err);
    return NextResponse.json(
      { reply: "Something went wrong with the AI connection." },
      { status: 500 }
    );
  }
}
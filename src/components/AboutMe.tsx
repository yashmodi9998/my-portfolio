"use client";
import Image from "next/image";
import HeadingText from "./HeadingText";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/YashModi.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* Text and Icons */}
        <div className="w-full md:w-1/2 flex gap-6 items-center">
      
      

          {/* About text */}
          <div>
            <HeadingText title="About Me" />
            <p className="text-lg text-muted-foreground mb-4">
              I'm <span className="text-[#58A2FF] font-semibold">Yash Modi</span>, a Web Developer and AI Enthusiast
              with a passion for turning ideas into beautiful, functional digital experiences.
            </p>
            <p className="text-muted-foreground">
              I love building intuitive UIs using ReactJS, Tailwind, and NodeJS, and exploring Machine Learning models
              that bring intelligence to user interfaces. Let's create something amazing together!
            </p>
          </div>
              {/* Icons column */}
          <div className="flex flex-col gap-4 text-2xl">
            <a
              href="https://github.com/yashmodi9998"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-gray-300 transition duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yashnileshbhaimodi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/yash__modi_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:yashmodi998@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D44638] transition duration-300 transform hover:scale-110"
            >
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

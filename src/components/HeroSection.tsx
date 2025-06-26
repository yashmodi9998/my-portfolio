"use client";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/button";
import Link from "next/link";
import SkillsCarousel from "./SkiillsCarousel";

export default function HeroSection() {
  return (
    <section className="py-8 px-4 w-full bg-background sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col items-start text-foreground">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm Yash 👋
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
          <span className="text-[#58A2FF]">
            <Typewriter
              words={["Web Developer", "Data Engineer", "Tech Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl">
          I build fast, beautiful, and smart digital products.
        </p>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base md:mt-4">
          Passionate about creating intuitive user interfaces and exploring the world of AI.
        </p>

        <div className="w-full mt-4 sm:mt-6">
          <SkillsCarousel />
        </div>

       <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
          <Link
            href="/Resume-YashModi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button className="w-full md:w-auto">Download Resume</Button>
          </Link>

          <Link href="#contact" rel="noopener noreferrer">
            <Button variant="outline" className="w-full md:w-auto">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
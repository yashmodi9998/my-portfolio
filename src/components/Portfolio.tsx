"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import HeadingText from "./HeadingText";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Cocotracker - Juice Inventory Management",
    description:
      "Manage coconut juice stock efficiently with real-time tracking, sales insights, and simple inventory flow built for small businesses.",
    image: "/Home.png",
    github: "https://github.com/yashmodi9998/Cocotracker-frontend",
    live: "https://cocotracker.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
  },
  {
    name: "DishDiscover",
    description:
      "Search delicious recipes and discover nearby ingredient stores with interactive maps and dietary label filters.",
    image: "/dishdiscover.png",
    github: "https://github.com/yashmodi9998/DishDiscover",
    tech: ["React", "Edamam API", "Google Maps API"],
  },
  {
    name: "YM Agency - Job Portal",
    description:
      "Job portal connecting job seekers with employers, featuring search, application tracking, and user profiles.",
    image: "/YMAgency.png",
    github: "https://github.com/yashmodi9998/JobAgency",
    tech:['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
  live:"https://ymagency.infinityfreeapp.com/"
  },
{
  name:"Fitness Hub Stays",
  description:"A comprehensive hotel booking website that allows users to search, view, and book hotels with ease.",
  image:"/FitnessHubStays.jpg",
  github:"https://github.com/yashmodi9998/FitnessHubStays",
  tech:["C##","MVC","Entity Framework","SQL Server",]
}
  
];

export default function PortfolioSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <HeadingText title="Projects" />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={700}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full hover:bg-primary/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <FaExternalLinkAlt className="text-base" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

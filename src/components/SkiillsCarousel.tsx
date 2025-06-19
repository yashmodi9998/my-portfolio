"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "NumPy",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
  },
  {
    name: "TensorFlow",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
  },
  {
    name: "PyTorch",
    src: "https://pytorch.org/assets/images/pytorch-logo.png",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
    {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Docker",
src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
},
{
    name:"GitHub",
    src:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
},
{name:'C#',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",},
{
    name:"flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
},
];


export default function SkillsCarousel() {
  return (
    <div className="w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          allowTouchMove={true}
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <img
                src={skill.src}
                alt={skill.name}
                title={skill.name}
                className="h-11 w-auto object-contain filter"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

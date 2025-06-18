'use client'

import { Typewriter } from 'react-simple-typewriter'
import { Button } from './ui/button'
import colors from '@/constants/colors'
import Link from "next/link";
import SkillsCarousel from './SkiillsCarousel';
export default function HeroSection() {
  return (
    <div className="text-foreground max-w-xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Yash 👋
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
        <span style={{ color: colors.primaryBlue }}>
        <Typewriter
          words={['Web Developer', 'Data Engineer', 'Tech Enthusiast']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
        </span>
      </h2>
      <p className="text-lg md:text-xl">
        I build fast, beautiful, and smart digital products.
      </p>
      <p className="text-muted-foreground mt-4">
        Passionate about creating intuitive user interfaces and exploring the world of AI.
          </p>
        <SkillsCarousel />
       <div className="flex space-x-4 mt-6">
        {/* Download Resume */}
        <Link href="/Resume-YashModi.pdf " target="_blank" rel="noopener noreferrer" download>
  <Button variant="default">Download Resume</Button>
</Link>

<Link href="https://github.com/yashmodi9998" target="_blank" rel="noopener noreferrer">
  <Button variant="outline">GitHub Repo</Button>
</Link>

      </div>
    </div>
  )
}

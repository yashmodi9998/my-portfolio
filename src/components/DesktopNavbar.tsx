// components/DesktopNavbar.tsx
'use client'

import { HomeIcon, UserIcon, CodeIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

export default function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#home">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#about">
          <UserIcon className="w-4 h-4" />
          <span className="hidden lg:inline">About</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#projects">
          <CodeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Projects</span>
        </Link>
      </Button>

      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="#contact">
          <MailIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Contact</span>
        </Link>
      </Button>
    </div>
  );
}

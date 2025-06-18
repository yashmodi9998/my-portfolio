import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Email */}
        <div className="mb-4 md:mb-0">
          <a href="mailto:yashmodi998@gmail.com" className="flex items-center space-x-2 hover:text-blue-500 transition">
            <Mail size={20} />
            <span>yashmodi998@gmail.com</span>
          </a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yashmodi9998" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yashnileshbhaimodi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://X.com/imYmodi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition"
          >
            <Twitter size={24} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="mt-4 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} Yash Modi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

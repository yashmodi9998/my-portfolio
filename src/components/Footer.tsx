import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">


        <div className="flex space-x-6">
          <a href="mailto:yashmodi998@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Email"
          className="hover:text-[#D44638] transition duration-300 transform hover:scale-110"
>
            <SiGmail size={24} />
          </a>
          <a
            href="https://github.com/yashmodi9998" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
                         className="hover:text-black dark:hover:text-gray-300 transition duration-300 transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yashnileshbhaimodi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] transition duration-300 transform hover:scale-110"

          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/yash__modi_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#E4405F] transition duration-300 transform hover:scale-110"

          >
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="mt-4 md:mt-0 text-sm">
          &copy; {new Date().getFullYear()} Yash Modi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

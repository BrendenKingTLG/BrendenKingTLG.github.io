import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-10 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left section - Logo or Name */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Brenden's Portfolio</h2>
          <p className="text-sm opacity-70">© 2024 All rights reserved.</p>
        </div>

        {/* Middle section - Navigation Links */}
        <div className="flex flex-col items-center md:flex-row md:gap-8 mb-4 md:mb-0"></div>

        {/* Right section - Social Links */}
        <div className="flex gap-6">
          <a
            href="mailto:your-email@example.com"
            aria-label="Email"
            className="hover:text-gray-400 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/your-username"
            aria-label="GitHub"
            className="hover:text-gray-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  School,
  Brain,
  PanelTopOpen,
  FileUser,
} from "lucide-react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg bg-black w-full z-10 left-0">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <a href="/" className="text-xl font-bold text-white">
              Brenden King
            </a>
            {/* Desktop menu */}
            <div className="hidden md:flex flex-row gap-12">
              <a
                href="#about-me"
                className="text-xl font-semibold text-white hover:underline  flex items-center gap-2"
              >
                <Brain /> Skills
              </a>
              <a
                href="#projects"
                className="text-xl font-semibold text-white hover:underline  flex items-center gap-2"
              >
                <School /> Projects
              </a>
              <a
                href="#education"
                className="text-xl font-semibold text-white hover:underline flex items-center gap-2"
              >
                <BriefcaseBusiness /> Education
              </a>
              <a
                href="/Brenden-King-Resume.pdf"
                className="text-xl font-semibold text-white hover:underline flex items-center gap-2"
              >
                <FileUser /> Resume
              </a>
            </div>
          </div>
          {/* Mobile toggle button */}
          <div className="-mr-2 flex items-center md:hidden">
            <PanelTopOpen
              onClick={toggleMenu}
              type="button"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {/* Mobile full-screen menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-center fixed inset-0 bg-black z-20 md:hidden transition-opacity duration-300`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="flex flex-col gap-10 mt-16 text-center">
          <a
            href="#skills"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            <Brain className="h-8 w-8 text-green-400" /> Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            <School className="h-8 w-8 text-green-400" /> Projects
          </a>
          <a
            href="#education"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
          >
            <BriefcaseBusiness className="h-8 w-8 text-green-400" /> Education
          </a>
          <a
            href="/Brenden-King-Resume.pdf"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-green-400 hover:underline transition-colors flex items-center gap-2"
          >
            <FileUser className="h-8 w-8 text-green-400" /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;

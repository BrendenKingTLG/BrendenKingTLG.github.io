"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center lg:justify-start justify-between flex-wrap bg-gray-300  p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span className="font-semibold text-xl tracking-tight">
            Brenden King
          </span>
        </div>
        <ul className="hidden text-black lg:flex gap-8 ">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div
          className="block lg:hidden"
          onClick={() => {
            setMobileNavOpen(!mobileNavOpen);
          }}
        >
          <button className="flex items-center px-3 py-2 border rounded text-black-200 border-teal-400 hover:text-black hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {mobileNavOpen && (
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#about"
                className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
              >
                About
              </a>
              <a
                href="#resume"
                className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

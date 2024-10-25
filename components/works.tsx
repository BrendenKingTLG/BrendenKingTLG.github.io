import React from "react";
import { TriangleRight } from "lucide-react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

const works = [
  {
    title: "Sudoku IOS App",
    description:
      "A challenging Sudoku game app for iOS with dark mode and puzzle-solving features.",
    status: "Available",
    coreFeatures: ["Swift", "UIKit", "CoreData"],
    otherFeatures: ["Dark Mode", "Solve Puzzles"],
    image: "/nasa.jpg",
    link: "https://apps.apple.com/us/app/sudoku-ad-free/id6474890346",
  },
  {
    title: "Blog App",
    description:
      "A modern blog platform supporting theme switching and markdown for creators.",
    status: "In Development",
    coreFeatures: ["Typescript", "Next.js", "MDX", "TailwindCSS"],
    otherFeatures: ["Theme Switching"],
    image: "/chip.jpg",
    link: "https://blog-indol-seven-95.vercel.app/",
  },
  {
    title: "Bookstore",
    description:
      "Full stack bookstore application built with Vue, Java, and PostgreSQL.",
    status: "In Development",
    coreFeatures: ["Java", "Servlet", "Vue", "PostgreSQL"],
    otherFeatures: ["Theme Switching"],
    image: "/hard.jpg",
    link: "https://gitlab.com/passionprojects/bookstore",
  },
];

export default function Work() {
  return (
    <>
      <Separator
        className="relative z-10"
        style={{ backgroundColor: "white", height: ".029em" }}
      />
      <div className="py-5 bg-black" id="projects">
        <div className="px-5 md:px-10 lg:px-28 mx-auto py-10 flex flex-col lg:flex-row justify-between items-center">
          <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
            Projects Ive Worked On
          </h1>
          <TriangleRight
            size={40}
            className="hidden lg:block"
            style={{
              transform: "scaleX(-1)",
              rotate: "180deg",
            }}
          />
        </div>

        <div id="work" className="px-5 md:px-10 lg:px-28 space-y-10">
          {works.map((work, index) => (
            <div
              key={index}
              className={`flex flex-col border ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 lg:gap-10 p-5 md:p-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
            >
              <div className="w-full lg:w-1/2">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {work.title}
                </h2>
                <p className="text-sm md:text-base mb-4">{work.description}</p>
                <h3 className="text-xs md:text-sm font-semibold mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                  {work.coreFeatures.map((feature, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium shadow-sm border border-white/20"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <h3 className="text-xs md:text-sm font-semibold mb-2">
                  Features
                </h3>
                <ul className="space-y-1">
                  {work.otherFeatures.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center lg:justify-start text-xs"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        className="w-3 h-3 mr-1"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeWidth="2"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { TriangleRight } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const entries = [
  {
    title: "Mid-level Software Engineer",
    company: "Aqua IT",
    period: "Jul 2023 - Present",
    stats: {
      main: "10+ Projects",
      description: "Led major SPA development",
    },
    details: [
      "Led the design and development of an advanced SPA using React.",
      "Transitioned the existing codebase to OpenShift using Docker and Kubernetes.",
    ],
  },
  {
    title: "Software Engineer I",
    company: "Amazon Web Services (S3)",
    period: "Jul 2022 - Jul 2023",
    stats: {
      main: "5 Major Deployments",
      description: "Improved CI/CD processes",
    },
    details: [
      "Implemented a Java-based solution with AWS Lambda to resolve job-sticking issues.",
      "Led the CI/CD automation process for three enterprise-level services.",
    ],
  },
  {
    title: "Cloud Engineer Skillbridge Intern",
    company: "Apex Systems",
    period: "Jan 2022 - Apr 2022",
    stats: {
      main: "Top 3 Hackathon",
      description: "Built SPA from scratch",
    },
    details: ["Engineered a SPA using vanilla JavaScript, hosted on AWS S3."],
  },
  {
    title: "Satellite Operator",
    company: "United States Space Force",
    period: "Oct 2018 - Oct 2022",
    stats: {
      main: "Improved Team Performance",
      description: "Enhanced employee training",
    },
    details: [
      "Spearheaded the enhancement of employee engagement through OJT materials.",
      "Lead for external communications, improving team performance.",
    ],
  },
];

export default function ProjectGallery() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Separator
        className="relative z-10"
        style={{ backgroundColor: "white", height: ".029em" }}
      />
      <div className="flex bg-black py-8 px-28 justify-between items-center">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Experience
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
      {isMobile ? (
        <MobileView entries={entries} />
      ) : (
        <DesktopView entries={entries} />
      )}
    </>
  );
}

function MobileView({ entries: any }: { entries: any }) {
  return (
    <div className="flex flex-col max-h-fit bg-black px-6 md:px-28 py-10 space-y-8">
      {entries.map((entry: any, index: any) => (
        <div
          key={index}
          className="bg-gray-800 border rounded-lg shadow-lg p-5 md:p-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {entry.title} at {entry.company}
          </h1>
          <p className="text-gray-300 text-md md:text-lg mb-4">
            {entry.period}
          </p>
          <div className="flex items-center gap-2 bg-gray-900 text-green-400 rounded-md px-4 py-2 mb-4">
            <strong className="text-lg font-bold">{entry.stats.main}</strong>
            <span className="text-sm text-gray-300">
              - {entry.stats.description}
            </span>
          </div>
          <ul className="space-y-2 text-gray-300">
            {entry.details.map((detail: any, detailIndex: any) => (
              <li key={detailIndex} className="text-sm flex items-start gap-2">
                <p>{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DesktopView({ entries }: { entries: any }) {
  const [selectedEntry, setSelectedEntry] = useState(entries[0]);

  return (
    <div className="flex flex-col md:flex-row max-h-fit bg-black px-6 md:px-28 py-10">
      {/* Left panel for the expanded card details */}
      <div className="flex-grow bg-gray-800 border mb-8 md:mb-0">
        <div className="relative bg-gray-800 rounded-lg p-5 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {selectedEntry.title} at {selectedEntry.company}
          </h1>
          <p className="text-gray-300 text-md md:text-lg mb-4">
            {selectedEntry.period}
          </p>
          <div className="flex items-center gap-2 bg-gray-900 text-green-400 rounded-md px-4 py-2 mb-4">
            <strong className="text-lg font-bold">
              {selectedEntry.stats.main}
            </strong>
            <span className="text-sm text-gray-300">
              - {selectedEntry.stats.description}
            </span>
          </div>
          <ul className="space-y-2 text-gray-300">
            {selectedEntry.details.map((detail: any, index: any) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <p>{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right panel for the list of selectable cards */}
      <div className="w-full md:w-1/3 bg-black overflow-y-auto p-5">
        <div className="space-y-4">
          {entries.map((entry: any, index: any) => (
            <div
              key={index}
              onClick={() => setSelectedEntry(entry)}
              className={`cursor-pointer flex items-center border space-x-4 p-3 rounded-lg transition-all duration-300 shadow ${
                entry.title === selectedEntry.title
                  ? "bg-green-100 border-l-4 border-green-500 text-black"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <div>
                <h2 className="text-md md:text-lg font-semibold">
                  {entry.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-400">
                  {entry.company}
                </p>
                <p className="text-xs text-gray-500">{entry.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

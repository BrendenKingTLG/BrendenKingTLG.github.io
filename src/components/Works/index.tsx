import React from "react";

const works = [
  {
    title: "Blog",
    description:
      "Full stack blog application built with React, Node, and PostgreSQL.",
    link: "https://blog-indol-seven-95.vercel.app/",
  },
  {
    title: "Sudoku",
    description: "IOS application for playing sudoku. Built with Swift.",
    link: "https://apps.apple.com/us/app/sudoku-ad-free/id6474890346",
  },
  {
    title: "Bookstore",
    description:
      "Full stack application for a bookstore. built with Vue, Java, and MySQL.",
    link: "https://gitlab.com/passionprojects/bookstore",
  },
];

export default function Work() {
  return (
    <div id="work" className="px-5">
      <div className="divider"></div>

      <h2 className="text-center text-3xl mt-10 font-bold mb-6">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((entry, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">{entry.title}</h2>
              <p className="text-gray-600 mt-2">{entry.description}</p>
              <a
                href={entry.link}
                className="text-blue-500 mt-4 block underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import {
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiSwift,
  SiTailwindcss,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
// import "./yourStyles.css"; // Ensure this is the path to your CSS file

const works = [
  {
    title: "Blog",
    description:
      "Full stack blog application built with React, Node, and PostgreSQL.",
    link: "https://blog-indol-seven-95.vercel.app/",
    image: "/blog.jpeg",
    badges: [
      <SiReact key={"React"} />,
      <SiJavascript key={"Node"} />,
      <SiPostgresql key={"PostgreSQL"} />,
    ],
  },
  {
    title: "Sudoku",
    description: "IOS application for playing sudoku. Built with Swift.",
    link: "https://apps.apple.com/us/app/sudoku-ad-free/id6474890346",
    image: "/sudoku.jpeg",
    badges: [<SiSwift key={"Swift"} />],
  },
  {
    title: "Web Dev Portfolio",
    description:
      "Frontend Application for a bookstore. Built with React and TailwindCSS.",
    link: "https://brendenkingtlg.github.io/portfolio-frontend/#/",
    image: "/webport.png",
    badges: [<SiReact key={"React"} />, <SiTailwindcss key={"Tailwind"} />],
  },
  {
    title: "Bookstore",
    description:
      "Full stack bookstore application built with Vue, Java, and PostgreSQL.",
    link: "https://gitlab.com/passionprojects/bookstore",
    image: "/bookstore.PNG",
    badges: [
      <SiVuedotjs key={"Vue"} />,
      <FaJava key={"Java"} />,
      <SiMysql key={"MySQL"} />,
    ],
  },
];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Work() {
  return (
    <div id="work" className="px-5">
      <div className="divider"></div>
      <h2 className="text-center text-3xl mt-10 font-bold mb-6">Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((entry, index) => (
          <div key={index} className="card shadow-xl">
            <a
              href={entry.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-body flex flex-col justify-end"
            >
              <h2 className="card-title w-full text-2xl pb-3">{entry.title}</h2>
              <p className="card-description mt-2 pb-3">{entry.description}</p>
              <div className="flex gap-2 flex-wrap">
                {entry.badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="badge rounded-md flex gap-2"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {badge}
                    {badge.key}
                  </div>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

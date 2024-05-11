import { link } from "fs";
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

export default function index() {
  return (
    <div id="work" className="">
      <h2 className="text-center text-2xl mt-10 font-bold">Works</h2>
      {works.map((entry, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="">
              <div className="p-4 bg-primary col-span-2">
                <h2 className="card-title">{entry.title}</h2>
                <br />
                <p>{entry.description}</p>
                <br />
                <a
                  href={entry.link}
                  className="text-blue-500 block break-words w-5/6"
                >
                  {entry.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

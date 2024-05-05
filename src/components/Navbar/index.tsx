import Link from "next/link";
import React from "react";

const pages = [
  { name: "History", location: "#history" },
  { name: "Skills", location: "#skills" },
  { name: "Work", location: "#work" },
  { name: "Chat", location: "#chat" },
];

export default function Index() {
  return (
    <div className="navbar fixed top-0 z-50">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal rounded-full lg:gap-9 bg-secondary lg:px-4">
          {pages.map((page, idx) => (
            <li key={idx}>
              <Link href={page.location}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const pages = [
  { name: "History", location: "#history" },
  { name: "Skills", location: "#skills" },
  { name: "Work", location: "#work" },
  { name: "Chat", location: "#chat" },
];
interface SideMenuProps {
  show: boolean;
  onClose: () => void; // Add an onClose prop for the exit button
}

const SideMenu: React.FC<SideMenuProps> = ({ show, onClose }) => {
  return (
    <div
      className={`z-10 fixed ${
        show ? "w-7/12" : "w-0"
      } h-screen transition-all duration-300`}
    >
      <div className="menu bg-base-200 w-full h-screen rounded-box p-4 shadow-lg overflow-auto relative">
        <button
          className="absolute top-2 right-2 p-2 bg-red-500 text-white hover:bg-red-700 transition-colors duration-200"
          onClick={onClose}
        >
          &times;
        </button>
        <ul className="mt-8">
          {" "}
          {/* Add margin-top to avoid overlap with the button */}
          {pages.map((page, idx) => (
            <li key={idx} className="mb-2 last:mb-0">
              <Link href={page.location}>
                <p className="block p-2 rounded-md hover:bg-primary text-black transition-colors duration-200">
                  {page.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="text-white">
      {showMenu && (
        <SideMenu show={showMenu} onClose={() => setShowMenu(false)} />
      )}
      <div className="navbar bg-secondary">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 p-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
          <a className="text-xl">Brenden King</a>
        </div>
        <div className="flex-none"></div>
      </div>
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className="navbar bg-base-100 border-black border-b-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {pages.map((page, idx) => (
              <li key={idx}>
                <Link href={page.location}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>

        <a className="text-xl">Brenden King</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;

import Head from "next/head";
import {
  SiTypescript,
  SiPython,
  SiFlask,
  SiBootstrap,
  SiLinux,
  SiMongodb,
  SiOpenjdk,
  SiAmazonaws,
  SiReact,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { ReactSVG } from 'react-svg';
import resume1 from 'public/BrendenKing-Resume-1.png'
import resume2 from 'public/BrendenKing-Resume-2.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Brenden King's Portfolio Website</title>
        <meta name="description" content="Brenden King's Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/development.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Noto+Color+Emoji&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className=" min-h-screen bg-white">
        <section className="">
          <nav className=" shadow-sm bg-slate-600" id="mainNav">
            <ul className="flex justify-center my-5">
              <li>
                <a href="/" className="cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <p>|</p>
              </li>
              <li>
                <a href="#resume" className="cursor-pointer">
                  Resume
                </a>
              </li>
              <li>
                <p>|</p>
              </li>
              <li>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section className="">
          <section className=" bg-white pb-5 mb-18">
            <h2 className=" font-bold text-center text-5xl mb-4 pt-9">
              Brenden King
            </h2>
            <h3 className="font-bold text-center text-xl">Software</h3>
            <p className="text-center px-3 py-2 mx-30  mb-3 leading-7">
              My technical expertise includes proficiency in programming
              languages such as Java, Python, and JavaScript, as well as
              in-depth knowledge of database management systems, web development
              frameworks, and cloud computing platforms. I am also experienced
              in agile development methodologies, test-driven development, and
              continuous integration and delivery
            </p>
          </section>
          <section className="content-center bg-indigo-400 p-6">
            <h2 className="text-center font-bold text-4xl m-5">Tech Stack</h2>
            <div
              className=" content-center"
              style={{ margin: "auto", width: "80%" }}
            >
              <h3 className="text-center font-bold text-xl m-5">Frontend</h3>
              <div className=" flex justify-between">
                <SiTypescript size={50} style={{ fill: "white" }} />
                <SiBootstrap size={50} style={{ fill: "white" }} />
                <SiReact size={50} style={{ fill: "white" }} />
              </div>
              <h3 className="text-center font-bold text-xl m-5">Backend</h3>
              <div className=" flex justify-between">
                <SiOpenjdk size={50} style={{ fill: "white" }} />
                <SiFlask size={50} style={{ fill: "white" }} />
                <SiMongodb size={50} style={{ fill: "white" }} />
              </div>
              <h3 className="text-center font-bold text-xl m-5">Systems</h3>
              <div className=" flex justify-between">
                <SiAmazonaws size={50} style={{ fill: "white" }} />
                <SiPython size={50} style={{ fill: "white" }} />
                <SiLinux size={50} style={{ fill: "white" }} />
              </div>
            </div>
          </section>
          <section className=" p-3" style={{ height: "15em" }}>
            <h2 className=" text-center font-bold text-5xl m-5">
              Connect With Me
            </h2>
            <div
              className=" flex justify-between mt-4"
              style={{ margin: "auto", width: "50%" }}
            >
              <a
                href="https://www.linkedin.com/in/brenden-king-swe/"
                target={"_blank"}
                rel={"noopener"}
              >
                <SiLinkedin size={50} fill="#0077b5"/>
              </a>
              <a
                target={"_blank"}
                rel={"noopener"}
                href="https://github.com/BrendenKingTLG"
              >
                <SiGithub size={50} fill="#171515"/>
              </a>
            </div>
          </section>
          <section id="resume">
            <h2 className="text-6xl font-bold text-center mt-3">Resume</h2>
            <center className="">
              <div className="App">
                <img src={resume1.src} alt="" />
                <img src={resume2.src} alt="" />

              </div>
            </center>
          </section>
          <section className="mb-20" id="projects">
            <h2 className="text-6xl font-bold text-center m-3">Projects</h2>
            <h3 className="text-center mb-96">Coming Soon</h3>
          </section>
        </section>
      </main>
    </>
  );
}

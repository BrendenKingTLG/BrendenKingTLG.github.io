"use client";

import Image from "next/image";
import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import {
  BiLogoTailwindCss,
  BiLogoSpringBoot,
  BiLogoFlask,
  BiSolidData,
  BiLogoAws,
  BiCaretDownCircle,
  BiSolidCaretDownCircle,
} from "react-icons/bi";
import {
  SiNginx,
  SiGrafana,
  SiKibana,
  SiDocker,
  SiKubernetes,
  SiGitlab,
} from "react-icons/si";
import { useState } from "react";

export default function Resume() {
  const [educationMenuOpen, setEducationMenuOpen] = useState(false);
  const [experienceMenuOpen, setExperienceMenuOpen] = useState(false);
  const [certMenuOpen, setCertMenuOpen] = useState(false);

  return (
    <section className="" id="">
      <div className="">
        <div className=" bg-white flex justify-center">
          <div className="w-full lg:w-5/6">
            <div className=" bg-gray-900 flex justify-center items-center gap-5 py-10 ">
              <div className="w-1/2 mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <div className=" text-3xl text-white font-bold tracking-tight sm:text-4xl ">
                  <h2>
                    Developer
                    <br /> Architect <br />
                    Maintainer
                  </h2>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex justify-center align-center">
                  <Image
                    src="/Brenden.jpeg"
                    alt="Image of Brenden King"
                    width={200}
                    height={150}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div
              id="about"
              className="flex justify-center shadow-xl px-5 py-5 bg-white text-lg text-black"
            >
              <p>
                As a Mid-Level Software Developer at aqua IT, I work with a team
                of talented engineers to design, develop, and deploy innovative
                web applications for various clients and industries. I use my
                skills in Java, Python, JavaScript, Angular, Mongoose, and AWS
                to create user-friendly, secure, and scalable solutions that
                meet the business and technical requirements.
              </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-3 bg-white">
              <h2 className=" text-4xl text-center">Skills</h2>
              <h2 className="text-center pt-6 text-lg font-semibold leading-8 text-gray-900 border-0">
                Full Stack Development
              </h2>
              <div className="mx-auto my-5 grid grid-cols-3 items-center gap-8 justify-items-center">
                <IoLogoReact size={50} />
                <IoLogoNodejs size={50} />
                <BiLogoFlask size={50} />
                <BiLogoSpringBoot size={50} />
                <BiLogoTailwindCss size={50} />
                <BiSolidData size={50} />
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 bg-white text-black">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                Systems and Server Management/Architecture
              </h2>
              <div className="mx-auto my-5 grid grid-cols-3 items-center gap-8 justify-items-center">
                <SiDocker size={50} />
                <SiGitlab size={50} />
                <SiGrafana size={50} />
                <SiKubernetes size={50} />
                <SiKibana size={50} />
                <BiLogoAws size={50} />
              </div>
            </div>
            <div className="bg-white text-lg pt-6 text-black" id="resume">
              <h2 className=" text-4xl text-center">Resume</h2>
              <ul className="px-3 py-3">
                <li
                  onClick={() => setEducationMenuOpen(!educationMenuOpen)}
                  className="flex items-center gap-2 text-2xl py-5"
                >
                  EDUCATION
                  {educationMenuOpen ? (
                    <BiSolidCaretDownCircle />
                  ) : (
                    <BiCaretDownCircle />
                  )}
                </li>
                {educationMenuOpen && (
                  <div>
                    <p>Virginia Tech, 4.0 GPA, Est Grad May 2025</p>
                    <p>
                      Masters in computer science – Secure Software, Full-Stack
                      Web Development, OOP/OOD
                    </p>
                    <p>Western Governors University, 3.89 GPA, July 2022</p>
                    <p>
                      Bachelor of Information Technology – Cloud Computing,
                      Database Management, and Network Analysis
                    </p>
                    <p>Associate of Space Operations</p>
                    <p>Community College of the Air Force, 4.0 GPA, May 2021</p>
                    <p>
                      Developed fundamentals for Orbital Mechanics, 3-D
                      modeling, Heat Transfer, and Sys Controls.
                    </p>
                  </div>
                )}
                <li
                  onClick={() => setExperienceMenuOpen(!experienceMenuOpen)}
                  className="flex items-center gap-2 text-2xl py-5"
                >
                  EXPERIENCE{" "}
                  {experienceMenuOpen ? (
                    <BiSolidCaretDownCircle />
                  ) : (
                    <BiCaretDownCircle />
                  )}
                </li>
                {experienceMenuOpen && (
                  <div>
                    <p>
                      <strong>
                        Amazon, AWS Software Development Engineer, July 2022 -
                        Present
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Devised and executed an innovative solution to resolve a
                        persistent job-sticking issue, resulting in annual
                        savings of over $5400 and freeing up more than 20
                        development hours per month
                      </li>
                      <li>
                        Led CI/CD automation for three enterprise level
                        services, reduced new domain build workload by 73%
                        saving 60,000+ in yearly revenue.
                      </li>
                      <li>
                        Increased software security by developing code test
                        coverage to at least 90%
                      </li>
                      <li>
                        Improved operational oversight by onboarding Grafana
                        (data visualization tool) which led to increased
                        insights and discovery of 10+ system anomalies.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        Apex Systems, AWS Solutions Architect Intern, January
                        2022 – April 2022
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Developed a custom AWS Lambda function, automating a
                        critical business process, resulting in increased
                        efficiency and reduced manual effort.
                      </li>
                      <li>
                        Constructed a user-friendly web application utilizing
                        various AWS services, including EC2, S3, and RDS,
                        delivering a seamless user experience
                      </li>
                      <li>
                        Created a streamlined pipeline using CodePipeline and
                        CodeBuild, enabling efficient code deployment and
                        continuous integration, ultimately improving the
                        development process.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        Space Force, Satellite System Operator, October 2018 –
                        October 2022
                      </strong>
                    </p>
                    <ul>
                      <li>
                        Managed the responsibility for all technical aspects of
                        satellite equipment installation, operations,
                        configuration, and alignment to keep lines of
                        communication up and running.
                      </li>
                      <li>
                        Improved efficiency by assisting as an operational
                        instructor.
                      </li>
                      <li>
                        Enhanced employee engagement by developing OJT training
                        material and taught 30+ new operators.
                      </li>
                      <li>
                        Increased operational tempo by 30% by overseeing and
                        improving several checklists.
                      </li>
                      <li>
                        Resolved multiple on-orbit anomalies as well as
                        maintained kinetic operations and refugee evacuation
                        efforts in the Middle East.
                      </li>
                    </ul>
                  </div>
                )}
                <li
                  onClick={() => setCertMenuOpen(!certMenuOpen)}
                  className="flex items-center gap-2 text-2xl py-5"
                >
                  CERTIFICATIONS{" "}
                  {certMenuOpen ? (
                    <BiSolidCaretDownCircle />
                  ) : (
                    <BiCaretDownCircle />
                  )}
                </li>
                {certMenuOpen && (
                  <div>
                    <ul>
                      <li>CompTIA Network+</li>
                      <li>CompTIA Security+</li>
                      <li>CompTIA CYSA+</li>
                      <li>CompTIA Project+</li>
                      <li>ITIL v4 Foundations</li>
                      <li>LPI Linux Essentials</li>
                    </ul>
                  </div>
                )}
              </ul>
              <div className="flex items-center justify-center py-2 ">
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  download="brenden_king_cv.pdf"
                  href="/Resume-Brenden-King.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="py-3 lg:mb-10 text-black" id="projects">
              <h2 className=" text-4xl text-center py-3">Projects</h2>
              <div className="flex justify-center align-center flex-col gap-10 items-center sm:flex-row">
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://brendenkingtlg.github.io/examplecompanyapp/"
                >
                  <Image
                    src="/company-app.png"
                    alt="Image of Brenden King"
                    width={200}
                    height={150}
                    className=""
                  />
                  <p>Example Company App</p>
                </a>
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://github.com/BrendenKingTLG/flask-api"
                >
                  <Image
                    src="/python-app.png"
                    alt="Image of Brenden King"
                    width={150}
                    height={150}
                    className=""
                  />
                  <p>Flask API with web view</p>
                </a>
                <a
                  className="border-2 border-stone-400 w-60 h-80 overflow-hidden flex justify-center items-center flex-col"
                  href="https://bookstore-fo9w.onrender.com/bookstore/"
                >
                  <Image
                    src="/java.png"
                    alt="Image of Brenden King"
                    width={350}
                    height={150}
                    className=""
                  />
                  <p>Java Servlet API</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

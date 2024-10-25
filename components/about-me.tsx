import { Separator } from "@radix-ui/react-separator";
import {
  Gitlab,
  SquareKanban,
  Braces,
  Code,
  Terminal,
  Cloud,
  Database,
} from "lucide-react";

const skills = [
  { name: "GitLab", icon: Gitlab, description: "Source control and CI/CD" },
  { name: "Jira", icon: SquareKanban, description: "Project management" },
  { name: "Java", icon: Braces, description: "Object-oriented programming" },
  {
    name: "TypeScript",
    icon: Code,
    description: "Typed JavaScript for robust apps",
  },
  { name: "Python", icon: Terminal, description: "Data science and scripting" },
  {
    name: "Postgres",
    icon: Database,
    description: "Relational database management",
  },
  {
    name: "AWS",
    icon: Cloud,
    description: "Cloud infrastructure and services",
  },
];

export default function AboutMe() {
  return (
    <div className="relative py-16 px-8 bg-black overflow-hidden" id="about-me">
      <div className="relative z-10 mx-auto max-w-7xl grid gap-10 backdrop-blur-sm bg-black/70 rounded-xl p-10">
        {/* Skills Section */}
        <h2 className="text-4xl font-extrabold tracking-tight text-white text-center sm:text-5xl">
          Technical Skills
        </h2>
        <p className="mt-4 text-lg text-gray-300 text-center leading-relaxed">
          Below are some of the technical skills I have experience with:
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-black border rounded-lg p-6 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-gray-700 border border-transparent hover:border-green-400"
            >
              <div className="flex flex-col items-center text-center">
                <skill.icon
                  className="h-12 w-12 text-green-400 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

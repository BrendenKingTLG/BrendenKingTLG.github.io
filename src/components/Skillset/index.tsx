import React from "react";

export default function SkillsChecklist() {
  const skills = {
    "Project Management": ["GitLab Plan", "Jira", "Agile", "Confluence"],
    Languages: ["Java", "Javascript/TypeScript", "Python", "HTML/CSS", "SQL"],
    Frameworks: [
      "SpringBoot",
      "Flask",
      "FastAPI",
      "Express",
      "React",
      "Angular",
      "Vue",
      "Next",
      "Tailwind",
    ],
    Systems: ["AWS", "Linux", "GitLab CI", "Scripting", "CloudFormation"],
  };

  return (
    <div id="skills" className="px-5">
      <div className="divider"></div>
      <h2 className="text-center text-2xl mt-10 font-bold">Skills</h2>
      <div className="card p-4 grid lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="mb-4 p-4 ">
            <h3 className="text-lg font-bold  mb-2">{category}</h3>
            <div className="gap-2">
              {items.map((item, index) => (
                <label className="label cursor-pointer" key={index}>
                  <span className="label-text ">{item}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked
                    readOnly
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { GraduationCap, TriangleRight } from "lucide-react";

const educationData = [
  {
    institution: "Virgina Tech",
    degree: "MS in Computer Science",
    year: "2023 - 2025",
    details: [
      "Specialized in Artificial Intelligence",
      "Relevant coursework: Machine Learning, Data Structures, Algorithms",
    ],
    size: "large",
  },
  {
    institution: "TLG Learning",
    degree: "Full Stack Web Development",
    year: "2023",
    details: [
      "Hands-on training in React, Node.js, and MongoDB",
      "Completed capstone project: E-commerce platform",
    ],
    size: "medium",
  },
  {
    institution: "Online Certifications",
    degree: "AWS Certified Solutions Architect",
    year: "2024",
    details: [
      "Developed deep expertise in AWS services",
      "Hands-on labs in architecture and deployment",
    ],
    size: "small",
  },
  {
    institution: "Self-Taught Courses",
    degree: "Data Science with Python",
    year: "2021",
    details: ["Python for Data Science", "Pandas, NumPy, Matplotlib"],
    size: "medium",
  },
  {
    institution: "Online Certifications",
    degree: "CompTIA Security+",
    year: "2024",
    details: ["Security concepts and best practices"],
    size: "small",
  },
];

export default function EducationSection() {
  return (
    <section
      className="bg-black text-white py-12 px-5 md:px-10 lg:px-28"
      id="education"
    >
      <div className="flex py-8 justify-between items-center">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Education/Certification
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {educationData.map((education, index) => (
          <div
            key={index}
            className={`bg-black border rounded-lg shadow-lg p-6 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105
              ${
                education.size === "large"
                  ? "md:row-span-2"
                  : education.size === "medium"
                  ? "md:row-span-1"
                  : "md:row-span-1"
              }`}
          >
            <h3 className="text-xl font-semibold mb-1">
              {education.institution}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{education.year}</p>
            <p className="text-md font-medium text-gray-200 mb-4">
              {education.degree}
            </p>
            <div className="space-y-2 text-gray-300">
              {education.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-sm flex items-start gap-2">
                  <GraduationCap size={16} className="text-green-400" />
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

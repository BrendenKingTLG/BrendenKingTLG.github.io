import React from "react";

const WorkHistory = () => {
  const entries = [
    {
      title: "Mid-level Software Engineer",
      company: "Aqua IT",
      period: "Jul 2023 - Present",
      stats: {
        main: "10+ Projects",
        description: "Led major SPA development",
      },
      details: [
        "Led the design and development of an advanced SPA using React.",
        "Transitioned the existing codebase to OpenShift using Docker and Kubernetes.",
      ],
    },
    {
      title: "Software Engineer I",
      company: "Amazon Web Services (S3)",
      period: "Jul 2022 - Jul 2023",
      stats: {
        main: "5 Major Deployments",
        description: "Improved CI/CD processes",
      },
      details: [
        "Implemented a Java-based solution with AWS Lambda to resolve job-sticking issues.",
        "Led the CI/CD automation process for three enterprise-level services.",
      ],
    },
    {
      title: "Cloud Engineer Skillbridge Intern",
      company: "Apex Systems",
      period: "Jan 2022 - Apr 2022",
      stats: {
        main: "Top 3 Hackathon",
        description: "Built SPA from scratch",
      },
      details: ["Engineered a SPA using vanilla JavaScript, hosted on AWS S3."],
    },
    {
      title: "Satellite Operator",
      company: "United States Space Force",
      period: "Oct 2018 - Oct 2022",
      stats: {
        main: "Improved Team Performance",
        description: "Enhanced employee training",
      },
      details: [
        "Spearheaded the enhancement of employee engagement through OJT materials.",
        "Lead for external communications, improving team performance.",
      ],
    },
  ];

  return (
    <div>
      {" "}
      <div className="divider"></div>
      <div
        className="flex flex-wrap justify-center items-start px-5"
        id="history"
      >
        <h2 className="mt-10 text-center text-2xl font-bold mb-3">History</h2>
        {entries.map((entry, index) => (
          <div key={index} className="card w-full mb-4 shadow-lg">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h3 className="card-title text-lg font-bold">
                    {entry.title} at {entry.company}
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 mt-2 text-gray-700">
                    {entry.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-l-4 border-primary">
                  <div className="text-primary font-bold text-xl">
                    {entry.stats.main}
                  </div>
                  <div className="text-gray-600">{entry.stats.description}</div>
                  <div className="text-gray-500">Since {entry.period}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;

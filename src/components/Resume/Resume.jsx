import Container from "react-bootstrap/Container";
import "./Resume.css";

export default function Resume() {
  return (
    <Container className="resumeContainer" id="resume">
      <section className="resumeTextContainer">
        <h3>Resume</h3>

        <h5>AREAS OF EXPERTISE</h5>
        <p>Software Engineering | Cloud Engineering | DevOps</p>

        <h5>SKILLS</h5>
        <p>Languages: Java, Python, JavaScript/TypeScript, Ruby</p>
        <p>
          Frameworks: React.js, Node, Express, Mongoose, MongoDB, Flask, Spring
        </p>
        <p>Systems: Linux, Docker, AWS</p>

        <h5>EDUCATION</h5>
        <p>Virginia Tech, 4.0 GPA, Est Grad May 2025</p>
        <p>
          Masters in computer science – Secure Software, Full-Stack Web
          Development, OOP/OOD
        </p>

        <p>Western Governors University, 3.89 GPA, July 2022</p>
        <p>
          Bachelor of Information Technology – Cloud Computing, Database
          Management, and Network Analysis
        </p>

        <p>Associate of Space Operations</p>
        <p>Community College of the Air Force, 4.0 GPA, May 2021</p>
        <p>
          Developed fundamentals for Orbital Mechanics, 3-D modeling, Heat
          Transfer, and Sys Controls.
        </p>

        <h5>PROFESSIONAL EXPERIENCE</h5>
        <p>
          <strong>
            Amazon, AWS Software Development Engineer, July 2022 - Present
          </strong>
        </p>
        <ul>
          <li>
            Devised and executed an innovative solution to resolve a persistent
            job-sticking issue, resulting in annual savings of over $5400 and
            freeing up more than 20 development hours per month
          </li>
          <li>
            Led CI/CD automation for three enterprise level services, reduced
            new domain build workload by 73% saving 60,000+ in yearly revenue.
          </li>
          <li>
            Increased software security by developing code test coverage to at
            least 90%
          </li>
          <li>
            Improved operational oversight by onboarding Grafana (data
            visualization tool) which led to increased insights and discovery of
            10+ system anomalies.
          </li>
        </ul>

        <p>
          <strong>
            Apex Systems, AWS Solutions Architect Intern, January 2022 – April
            2022
          </strong>
        </p>
        <ul>
          <li>
            Developed a custom AWS Lambda function, automating a critical
            business process, resulting in increased efficiency and reduced
            manual effort.
          </li>
          <li>
            Constructed a user-friendly web application utilizing various AWS
            services, including EC2, S3, and RDS, delivering a seamless user
            experience
          </li>
          <li>
            Created a streamlined pipeline using CodePipeline and CodeBuild,
            enabling efficient code deployment and continuous integration,
            ultimately improving the development process.
          </li>
        </ul>

        <p>
          <strong>
            Space Force, Satellite System Operator, October 2018 – October 2022
          </strong>
        </p>
        <ul>
          <li>
            Managed the responsibility for all technical aspects of satellite
            equipment installation, operations, configuration, and alignment to
            keep lines of communication up and running.
          </li>
          <li>
            Improved efficiency by assisting as an operational instructor.
          </li>
          <li>
            Enhanced employee engagement by developing OJT training material and
            taught 30+ new operators.
          </li>
          <li>
            Increased operational tempo by 30% by overseeing and improving
            several checklists.
          </li>
          <li>
            Resolved multiple on-orbit anomalies as well as maintained kinetic
            operations and refugee evacuation efforts in the Middle East.
          </li>
        </ul>

        <h5>IT COURSES AND CERTIFICATION</h5>
        <ul>
          <li>CompTIA Network+</li>
          <li>CompTIA Security+</li>
          <li>CompTIA CYSA+</li>
          <li>CompTIA Project+</li>
          <li>ITIL v4 Foundations</li>
          <li>LPI Linux Essentials</li>
        </ul>

        <p>
          <strong>
            Amazon Web Services (AWS) Certified Solutions Architect – Associate
          </strong>
        </p>
        <p>LPI Linux Essentials</p>
      </section>
    </Container>
  );
}

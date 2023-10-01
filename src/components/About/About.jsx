import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./About.css";

export default function Resume() {
  return (
    <Container className="aboutContainer" id="about">
      <section className="imgContainer">
        <Image src="Brenden.jpeg" roundedCircle />
      </section>
      <section className="textContainer">
        <p>
          As a Mid-Level Software Developer at aqua IT, I work with a team of
          talented engineers to design, develop, and deploy innovative web
          applications for various clients and industries. I use my skills in
          Java, Python, JavaScript, Angular, Mongoose, and AWS to create
          user-friendly, secure, and scalable solutions that meet the business
          and technical requirements.
        </p>
      </section>
    </Container>
  );
}

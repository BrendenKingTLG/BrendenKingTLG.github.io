import Container from "react-bootstrap/Container";
import { SiLinkedin, SiGithub } from "react-icons/si";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footerContainer">
      <h3>Connect with me</h3>
      <div>
        <span>LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/brenden-king-swe/"
          target={"_blank"}
          rel={"noopener"}
          className="footerLinks"
        >
          <SiLinkedin size={20} fill="#0077b5" />
          /brenden-king-swe
        </a>
      </div>
      <div>
        <span>GitHub:</span>
        <a
          target={"_blank"}
          rel={"noopener"}
          href="https://github.com/BrendenKingTLG"
          className="footerLinks"
        >
          <SiGithub size={25} fill="#171515" />
          /BrendenKingTLG
        </a>
      </div>
    </section>
  );
}

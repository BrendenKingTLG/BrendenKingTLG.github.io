import MainNavbar from "./components/MainNavbar/MainNavbar.jsx";
import About from "./components/About/About.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <MainNavbar />
      <About />
      <Resume />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

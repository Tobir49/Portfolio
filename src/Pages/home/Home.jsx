import "./home.css";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Me from "../../Components/Me/Me";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Me />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;

import "./home.css";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Me from "../../Components/Me/Me";
import Projects from "../../Components/Projects/Projects";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Me />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;

import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OtherSkills from "./components/OtherSkills";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="bg-custom text-white min-h-screen flex flex-col">
      <div className="mx-28">
        <Header />
        <Hero />
        <Projects />
        <Technologies />
        <OtherSkills />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;

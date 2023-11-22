import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OtherSkills from "./components/OtherSkills";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="bg-custom text-white mt-0">
      <div className="mx-28">
        <Header />
        <Hero />
        <Projects />
        <Technologies />
        <OtherSkills />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

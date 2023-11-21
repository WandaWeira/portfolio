import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-custom text-white mt-0">
      <div className="mx-28">
        <Header />
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default App;

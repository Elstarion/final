import Hero from "./hero/Hero";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Home;

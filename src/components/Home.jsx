import Intro from "./Intro";
import TechStack from "./TechStack";
import Projects from "./Projects";

const Home = () => {
  return ( 
    <section id="home" className="w-full px-4 py-16">
      <Intro />
      <TechStack />
      <Projects />
    </section>
   );
}
 
export default Home;
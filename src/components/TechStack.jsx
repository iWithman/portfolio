import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaAws, FaTools } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiBootstrap, SiSass, SiGoogletagmanager, SiAsana, SiNextdotjs } from "react-icons/si";

const TechStack = () => {
  
const technologies = [
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript (ES6+)", icon: FaJsSquare },
  { name: "Redux", icon: SiRedux },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SCSS", icon: SiSass },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node.js", icon: FaNodeJs },
  { name: "REST APIs", icon: FaTools },
  { name: "AWS", icon: FaAws },
  { name: "CI/CD", icon: FaTools },
  { name: "Git", icon: FaGitAlt },
  { name: "Google Tag Manager", icon: SiGoogletagmanager },
  { name: "Asana", icon: SiAsana }
];
  return ( 
    <section id="tech-stack" className="w-full py-0 md:py-16 text-center md:text-left">
      <h2 className="text-[32px] md:text-[48px]">My Tech Stack</h2>
      <p className="text-[14px] md:text-[18px]">
        Here are some of the technologies and tools I work with:
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <tech.icon className="text-4xl mb-2" />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
   );
}
 
export default TechStack;
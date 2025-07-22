import ProjectsShowcase from "../components/ProjectsShowcase";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import flower from "../assets/gpt-Flower.png"

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="w-full bg-black py-16 relative overflow-hidden z-0">
      {/* Glowing Background Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#4f46e5]/30 via-[#ec4899]/20 to-transparent rounded-full blur-3xl z-0 opacity-40"></div>

      {/* Flower with AOS */}
      <div
        className="flex justify-center relative z-10"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <img
          src={flower}
          alt="Flower"
          className="w-[25vw] drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)] hover:rotate-[5deg] transition duration-500 ease-in-out"
        />
      </div>

      {/* Layered Heading */}
      <div className="flex justify-center relative mt-[-3rem] z-20">
        <h1 className="text-[13vw] md:text-[10vw] font-extrabold text-white opacity-10 absolute tracking-wider select-none">
          PROJECTS
        </h1>
        <p
          className="text-5xl md:text-6xl font-bold text-white z-10"
          data-aos="fade-down"
        >
          PROJECTS
        </p>
      </div>

      {/* Showcase */}
      <div className="relative z-30 mt-12 px-6">
        <ProjectsShowcase />
      </div>
    </div>
  );
};

export default Projects;

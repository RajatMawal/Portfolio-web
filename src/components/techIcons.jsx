import Icons from "../assets/Icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TechStack = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 md:px-20 py-20 font-sans">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-[12vw] md:text-[10vw] font-bold opacity-5 absolute inset-0 z-0">
          TECH STACK
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold relative bg-gradient-to-r from-[#ff6ec4] to-[#7873f5] bg-clip-text text-transparent z-10">
          TECH STACK
        </h2>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {Icons.map((tech, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="relative group w-[120px] h-[120px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl flex flex-col items-center justify-center shadow-inner overflow-hidden"
          >
            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:bg-gradient-to-br from-pink-500/10 to-indigo-500/10 group-hover:ring-2 group-hover:ring-indigo-500/40 transition-all duration-300" />

            {/* Fixed-size icon wrapper */}
            <div className="w-10 h-10 text-white">
              {tech.icon}
            </div>

            <p className="mt-3 text-xs font-medium text-white/90">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

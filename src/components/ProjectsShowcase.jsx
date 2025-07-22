import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import blogImg from "../assets/blog-project.png"; // Correct image import

const ProjectsShowcase = () => {
  const projects = [
    {
      name: "Blog Application",
      members: "Personal Project",
      description: "Blog Application (MERN Stack) with JWT Authentication.",
      keyPoints: [
        "User Authentication",
        "Role-based Access",
        "Dashboard view",
        "Blog Management",
        "Navigation",
      ],
      technology: [
        "React.js",
        "Tailwind",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Postman",
        "JWT",
        "Axios",
        "Redux Toolkit",
      ],
      img: blogImg,
      checkout: "https://blog-frontend-five-navy.vercel.app",
    },
    {
      name: "Ecommerce",
      members: "Personal Project",
      description: "A food delivery app with role-based dashboard & chatbot.",
      keyPoints: [
        "Role-based dashboard",
        "OTP verification",
        "AI chatbot",
        "Blog & service management",
      ],
      technology: ["MongoDB", "React.js", "Node.js"],
      img: "https://downloadpsd.cc/wp-content/uploads/Bold-Color-Flat-Web-UI-Elements-Kit.png",
    },
    {
      name: "Weather App",
      members: "Personal Project",
      description:
        "Chatbot interface that fetches live weather using OpenWeather API.",
      keyPoints: ["Live API", "Chat UI", "Animated BG"],
      technology: ["React.js", "Node.js", "OpenWeather API"],
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/gentium-designer-website-template-1024x832.jpg",
    },
  ];



  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const itemHeight = el.scrollHeight / projects.length;
    const index = Math.round(el.scrollTop / itemHeight);
    setCurrentIndex(index);
  };

  const gradients = [
    "from-[#090040] via-[#471396] to-[#B13BFF]",
    "from-[#98CD00] via-[#A4DD00] to-[#FFFADC]",
    "from-[#511D43] via-[#901E3E] to-[#DC2525]",
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-10 text-white">
      {/* Left scroll section */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full lg:w-1/2 max-h-[80vh] overflow-y-auto space-y-6 px-2 scroll-smooth scroll-hidden"
      >
        {projects.map((proj,idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`rounded-xl overflow-hidden border border-white/10 bg-gradient-to-tr ${gradients[idx % gradients.length]} shadow-lg p-5`}
          >
            <div>
              <h3 className="text-xl font-bold">{proj.name}</h3>
              <p className="text-xs text-white/70">{proj.members}</p>
            </div>
            <img
              src={proj.img}
              alt={proj.name}
              className="mt-4 w-full h-52 object-cover rounded-md shadow-md"
            />
            {proj.checkout && (
              <a
                href={proj.checkout}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 block md:hidden"
              >
                Visit Project
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Right detail section */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 shadow-md space-y-4 hidden md:block"
      >
        <h2 className="text-3xl font-semibold text-pink-400">
          {projects[currentIndex].name}
        </h2>
        <p className="text-white/80">{projects[currentIndex].description}</p>
        <ul className="list-disc list-inside space-y-1 text-sm text-white/90">
          {projects[currentIndex].keyPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div>
          <p className="text-sm font-medium mt-3">Technologies:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projects[currentIndex].technology.map((tech, i) => (
              <span
                key={i}
                className="bg-white/10 border border-white/20 px-2 py-1 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          {projects[currentIndex].checkout && (
            <a
              href={projects[currentIndex].checkout}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline mt-4 block"
            >
              Visit Project
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsShowcase;

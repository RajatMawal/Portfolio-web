import { IoIosSchool } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-black py-20 px-2 sm:px-6 md:px-20 font-sans overflow-x-hidden ">
      {/* Header */}
      <div className="relative text-center mb-16 " data-aos="fade-up">
        <h1 className="text-[12vw] md:text-[10vw] text-white font-extrabold opacity-5 absolute w-full top-1">
          ABOUT ME
        </h1>
        <h1 className="text-4xl md:text-6xl text-white font-bold relative z-10">
          ABOUT ME
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 ">
        {/* Profile Section */}
        <div
          data-aos="fade-right"
          className="w-full max-w-xs sm:max-w-sm md:w-[35%] relative bg-gradient-to-br from-purple-500 to-blue-600 p-1 rounded-[60px_0px_70px_0px] md:rounded-[120px_0px_140px_0px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <img
            src="/src/assets/p-pic.png"
            alt="Rajat Mawal"
            className="w-full h-full object-cover rounded-[60px_0px_70px_0px] md:rounded-[120px_0px_140px_0px] hover:scale-[1.02] transition-all duration-500"
            style={{
              filter: "drop-shadow(0 0 20px rgba(0,0,0,0.7))",
            }}
          />
        </div>

        {/* Text Content */}
        <div
          data-aos="fade-left"
          className="bg-white/10 backdrop-blur-md text-white w-full md:w-[60%] rounded-xl p-3 sm:p-6 md:p-10 shadow-lg hover:shadow-white/30 transition duration-500"
        >
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            <span className="text-2xl font-semibold">Hi, I'm Rajat Mawal,</span>
            <br />
            a passionate <strong>MERN Stack Developer</strong> with hands-on experience in building responsive, dynamic, and user-friendly web applications. I specialize in using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong> to develop scalable solutions. I'm committed to clean code, solving real-world problems, and continuously learning modern technologies to deliver great user experiences.
          </p>

          {/* What I Do */}
          <div className="mb-6">
            <p className="text-2xl font-semibold">What I Do</p>
            <div className="flex flex-wrap gap-3 mt-3">
              {["Frontend Development", "Backend Development", "FullStack Development"].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-sm font-medium shadow hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p className="text-2xl font-semibold flex items-center gap-2 mb-4">
              <IoIosSchool className="text-4xl text-blue-400" /> Education
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Govt Boys Sr Sec School",
                  detail: "Class 10th from CBSE",
                  year: "2019–2020",
                },
                {
                  title: "Govt Boys Sr Sec School",
                  detail: "Class 12th from CBSE",
                  year: "2020–2021",
                },
                {
                  title: "Delhi University",
                  detail: "B.Com – Result Awaited",
                  year: "2022–2025",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="bg-white/10 border border-white/20 px-6 py-4 rounded-lg shadow-md hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <p className="text-lg font-semibold">{edu.title}</p>
                  <p className="text-sm opacity-80">{edu.detail}</p>
                  <p className="text-xs text-gray-300 mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

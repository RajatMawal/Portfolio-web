import TechStack from "../components/techIcons";
const Skills = () => {

  return (
    <>
    <div className="bg-black w-full h-[50vh] relative overflow-hidden ">
      <div className="absolute  w-[100vw] mt-40 ">
        <div className="w-[110vw] h-[10vh] bg-pink-400  absolute z-10 rotate-3 opacity-30 "></div>
        <div
          //   style={{ transform: "" }}
          className="w-[110vw] ml-[-10vw] h-[10vh] bg-gradient-to-r from-[#4300FF] to-[#8CCDEB] flex items-center justify-center rotate-[-4deg] absolute z-10 tracking-wider"
        >
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="6"
            className="text-xl font-bold text-white py-2 "
          >
            🚀 MERN Stack Developer ✦ React ✦ Tailwind ✦ JavaScript ✦ Open
            Source Enthusiast ✦ Responsive Design ✦ Backend Developement 🚀
          </marquee>
        </div>
        
      </div>
    </div>
    <TechStack />
    </>
  )
};

export default Skills;

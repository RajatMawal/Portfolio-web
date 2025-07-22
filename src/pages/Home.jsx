// No changes to imports
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaRegCopy,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const words = [
    "Full Stack Developer.",
    "Frontend Developer.",
    "Backend Developer.",
  ];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[i];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(j - 1);
        if (j === 0) {
          setIsDeleting(false);
          setI((i + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(j + 1);
        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, i, j]);

    const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="relative w-full bg-black text-white overflow-hidden h-[50vh] md:h-full" >
      {/* Glowing Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden ">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-2xl animate-spin-slow bottom-10 right-10"></div>
        <div className="absolute w-60 h-60 bg-blue-500/10 rounded-full blur-2xl animate-ping top-1/2 left-1/3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col py-20 md:flex-row items-center justify-between min-h-screen px-6 md:px-12 gap-10 py-10">
        {/* Left Content */}
        <motion.div
          className="w-full max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-400 mb-1">Hi, I am</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Rajat Mawal
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-yellow-400">
              {text}
            </span>
            <span className="blinking-cursor">|</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm md:text-base justify-center md:justify-start">
            <NavLink
              to="/Contact"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:scale-105 transition font-medium shadow-md"
            >
              Let's Connect
              <span className="bg-white text-black p-2 rounded-full">
                <FaArrowRight />
              </span>
            </NavLink>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm text-sm">
              <FaRegCopy />
              <span className="select-all" onClick={() => copyToClipboard("rajat333mawal@gmail.com")}>rajat333mawal@gmail.com</span>
            </div>
          </div>

          <a
            href="/RajatMawal_CV.pdf"
            download
            className="inline-block border border-fuchsia-500 hover:bg-fuchsia-600 hover:text-white transition px-6 py-2 rounded-full font-medium shadow-md"
          >
            Download CV
          </a>

          <div className="flex gap-6 mt-8 text-2xl justify-center md:justify-start">
            <a href="https://github.com/RajatMawal" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-400 transition" />
            </a>
            <a href="https://linkedin.com/in/rajat-mawal-513745246" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="https://x.com/RajatMawal" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-sky-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          className="w-full md:w-[40%] max-w-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <iframe
            src="https://lottie.host/embed/5763490d-081c-4d5f-9a0f-9b9962af7723/PIKA5Dhlcj.lottie"
            className="w-full h-64 hidden md:h-[90vh] md:block"
            loading="lazy"
            title="Developer Animation"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

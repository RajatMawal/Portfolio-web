import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import waves from "../assets/svg.png";

const Footer = () => {
  return (
    <footer className="relative w-full h-[50vh] bg-black text-white overflow-hidden">
      {/* Background Wave Image */}
      <img
        src={waves}
        alt="footer waves"
        className="w-full h-full object-cover absolute top-0 left-0 z-0 opacity-20"
      />

      {/* Glowing Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-6 text-center space-y-4">
        <h2 className="text-2xl font-bold">Let’s Connect</h2>
        <p className="text-sm text-gray-400">
          Reach out on social media or via email
        </p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/rajat-mawal-513745246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RajatMawal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rajat333mawal@gmail.com"
            className="hover:text-red-400 transition"
          >
            <MdEmail />
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-4">© 2025 Rajat Mawal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

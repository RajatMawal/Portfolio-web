import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-[100vw] z-30 bg-black bg-opacity-90 backdrop-blur-sm py-4 px-6 md:px-8 flex justify-between items-center shadow-lg ">
      <h1 className="text-lg md:text-3xl font-bold bg-gradient-to-r from-[#4A249D] to-[#009FBD] bg-clip-text text-transparent cursor-pointer  ">
        CODE&SHADE
      </h1>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white text-2xl  md:hidden"
        aria-label={menuOpen ? "Close Menu" : "Open Menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-lg text-white items-center rounded-full px-4 font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `transition duration-300 ease-in-out px-4 py-2 rounded-full ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 to-[#48CFCB] scale-110"
                      : "hover:scale-110 hover:bg-white/20"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-95 backdrop-blur-md text-white py-4 md:hidden shadow-md"
          >
            <ul className="flex flex-col items-center gap-5 text-lg font-medium">
              {navItems.map(({ name, path }) => (
                <li key={name} onClick={() => setMenuOpen(false)}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-full transition ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500 to-[#48CFCB]"
                          : "hover:bg-white/10"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

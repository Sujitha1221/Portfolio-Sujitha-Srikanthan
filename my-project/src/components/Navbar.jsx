import React, { useState } from "react";
import logo from "../assets/ss-logo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close the menu on mobile after clicking a link
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between py-6 mb-15 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Hamburger Menu */}
      <button
        className={`block lg:hidden text-2xl ${
          isOpen ? "text-white" : "text-black"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "transparent",
          transition: "transform 0.3s ease, color 0.3s ease", // Smooth animation
        }}
      >
        <span
          className={`block w-8 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white rounded my-1 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-white rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] shadow-lg`}
        style={{
          transition: "transform 0.4s ease-in-out", // Smooth slide-in effect
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          {/* Close Button */}
          <button
            className="text-2xl self-end mb-4 text-white hover:text-gray-400"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Navigation Links */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg text-white hover:text-cyan-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("technologies")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Technologies
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-lg text-white hover:text-cyan-400"
          >
            Contact
          </button>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 text-2xl p-4">
          <a
            href="https://www.linkedin.com/in/sujitha-srikanthan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sujitha1221"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/suji.tha_21?igsh=M2dibzk2NGF3aG0w"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61565706336238"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-white"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Desktop Links (unchanged) */}
      <div className="hidden lg:flex lg:items-center lg:gap-6">
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("technologies")}>
          Technologies
        </button>
        <button onClick={() => scrollToSection("education")}>Education</button>
        <button onClick={() => scrollToSection("experience")}>
          Experience
        </button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 text-white text-xl" // Increased size
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sujitha1221"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 text-white text-xl" // Increased size
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 text-white text-xl" // Increased size
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61565706336238"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 text-white text-#xl" // Increased size
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

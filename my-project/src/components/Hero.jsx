import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "../assets/sujitha-square.png";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Software Engineer at IFS",
    "Final Year Undergraduate at SLIIT",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center pb-10 lg:pb-32">
      <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 mb-12 lg:mb-0 px-4">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-6 text-5xl lg:text-7xl font-semibold tracking-tight leading-tight"
            >
              Sujitha Srikanthan
            </motion.h1>

            <div className="relative overflow-hidden w-full h-28 lg:h-12 flex justify-center lg:justify-start">
              <AnimatePresence>
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute bg-gradient-to-r from-emerald-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl lg:text-4xl font-medium tracking-tight w-full text-center lg:text-left"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 max-w-2xl py-4 font-light tracking-tight text-neutral-300"
            >
              🚀 Driven by a passion for technology 💻 and a commitment to creating meaningful, impactful software solutions 🌍.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-6">
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-400 to-purple-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1T8H4PwSgFH40Q2nNuxI6Xfn1iLjjSlkk/view?usp=sharing"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={profilePic}
              alt="Sujitha Srikanthan"
              className="rounded-full shadow-2xl w-64 h-64 lg:w-96 lg:h-96 object-cover border-4 border-neutral-800"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

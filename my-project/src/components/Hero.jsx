import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Sujitha.jpg";
import { motion } from "framer-motion";

const buttonAnimation = (delay) => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-col items-center lg:flex-row lg:items-center">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="pb-6 text-5xl lg:text-7xl font-medium tracking-tight"
            >
              Sujitha Srikanthan
            </motion.h1>
            <motion.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-emerald-400 via-purple-500 to-indigo-500 bg-clip-text text-3xl lg:text-4xl font-medium tracking-tight text-transparent"
            >
              Final Year Undergraduate at SLIIT
            </motion.span>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="my-4 max-w-2xl py-4 font-light tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <motion.a
                href="#contact"
                variants={buttonAnimation(0.6)}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(to right, #34d399, #9333ea)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-emerald-400 to-purple-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1AzymKRAf9ZF027p6cayT6O70K6l7904k/view?usp=sharing"
                download
                variants={buttonAnimation(0.8)}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.1,
                  background: "linear-gradient(to right, #0ea5e9, #6366f1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/5 lg:p-8">
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={profilePic}
              alt="Sujitha Srikanthan"
              className="rounded-full shadow-lg w-64 lg:w-80 mt-5 lg:mt-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

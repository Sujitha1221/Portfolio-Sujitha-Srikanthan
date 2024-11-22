import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sujitha Srikanthan
            </motion.h1>
            <motion.span
              whileInView={{ x: 0, opacity: 1 }}
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Undergraduate at SLIIT
            </motion.span>
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8 mb-8 lg:mt-12 lg:mb-0">
              <motion.a
                href="#contact"
                variants={container(1.5)} // Adjusted delay for smoother effect
                initial="hidden"
                animate="visible"
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="/assets/Sujitha_Srikanthan_CV.pdf" // Ensure the path is correct
                download
                variants={container(1.7)} // Slight delay to create a staggered effect
                initial="hidden"
                animate="visible"
                className="px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-teal-400 to-cyan-600 rounded-lg hover:bg-gradient-to-l transition transform hover:scale-105"
              >
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 lg:p-8">
          <div className="flex justify-center mb-8 lg:mb-0">
            {" "}
            {/* Added margin-bottom for mobile spacing */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Sujitha Srikanthan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

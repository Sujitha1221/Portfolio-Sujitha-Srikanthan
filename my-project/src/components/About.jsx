import React from "react";
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from "../constants";
import aboutImg from "../assets/Sujitha3.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>{" "}
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-80 h-auto"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-2">{ABOUT_TEXT_1}</p>
            <p className="my-2 max-w-xl py-2">{ABOUT_TEXT_2}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

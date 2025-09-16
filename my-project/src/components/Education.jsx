import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Education
      </motion.h2>

      {/* Sri Lanka Institute of Information Technology (SLIIT) */}
      <div className="mb-12 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4 text-neutral-400"
        >
          <p className="mb-2 text-sm">2021 July - 2025 September</p>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4 text-white"
        >
          <h6 className="mb-2 font-semibold">
            B.Sc. (Hons) in Information Technology Specializing in Software
            Engineering - Sri Lanka Institute of Information Technology (SLIIT)
          </h6>
          <p className="mb-4 text-neutral-400">WGPA: 3.62</p>
        </motion.div>
      </div>

      {/* Hindu Ladies' College, Wellawatte (G.C.E. A/L and O/L) */}
      <div className="mb-12 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4 text-neutral-400"
        >
          <p className="mb-2 text-sm">2018 - 2020</p>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4 text-white"
        >
          <h6 className="mb-2 font-semibold">
            G.C.E. Advanced Level - Hindu Ladies' College
          </h6>
          <p className="mb-4 text-neutral-400">
            <strong>Physical Science Stream</strong>
            <br />
            Combined Mathematics - C | Physics - C | Chemistry - S
          </p>
        </motion.div>
      </div>

      {/* G.C.E. Ordinary Level Examination - 2017 (Hindu Ladies' College) */}
      <div className="mb-12 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4 text-neutral-400"
        >
          <p className="mb-2 text-sm">2016 - 2017</p>
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4 text-white"
        >
          <h6 className="mb-2 font-semibold">
            G.C.E. Ordinary Level - Hindu Ladies' College
          </h6>
          <p className="mb-4 text-neutral-400">8A | 1C</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

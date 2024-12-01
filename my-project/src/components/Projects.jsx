import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa"; // GitHub icon

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("web");

  const filteredProjects = PROJECTS.filter(
    (project) => project.type === selectedTab
  );

  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="flex justify-center space-x-4 mb-10">
        {["web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`${
              selectedTab === tab ? "text-purple-900" : "text-neutral-400"
            } border-b-2 border-transparent hover:border-purple-900 py-2 px-4 font-medium`}
          >
            {tab === "web" ? "Web Applications" : "Mobile Applications"}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="mb-12 w-full max-w-4xl flex flex-wrap lg:flex-nowrap lg:justify-start"
          >
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <motion.img
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                src={project.image}
                alt={project.title}
                className="w-[200px] h-[200px] object-cover rounded-md shadow-md"
              />
            </div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-2/3 mt-6 lg:mt-0 px-6"
            >
              <h6 className="mb-3 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex items-center space-x-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-400 hover:text-purple-900 font-medium hover:underline"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

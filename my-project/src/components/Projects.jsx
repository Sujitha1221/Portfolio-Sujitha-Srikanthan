import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("web");

  const filteredProjects = PROJECTS.filter(
    (project) => project.type === selectedTab
  );

  return (
    <div className="border-b border-neutral-900 pb-3">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setSelectedTab("web")}
          className={`${
            selectedTab === "web" ? "text-purple-900" : "text-neutral-400"
          } border-b-2 border-transparent hover:border-purple-900 py-2 px-4`}
        >
          Web Application
        </button>
        <button
          onClick={() => setSelectedTab("mobile")}
          className={`${
            selectedTab === "mobile" ? "text-purple-900" : "text-neutral-400"
          } border-b-2 border-transparent hover:border-purple-900 py-2 px-4`}
        >
          Mobile Application
        </button>
      </div>
      <div>
        {filteredProjects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mt-2 mb-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-900  font-medium hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

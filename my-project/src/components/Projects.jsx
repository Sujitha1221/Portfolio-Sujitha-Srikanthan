import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

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

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {["web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`${
              selectedTab === tab
                ? "text-purple-900 border-purple-900"
                : "text-neutral-400"
            } border-b-2 border-transparent hover:border-purple-900 py-2 px-4 font-medium transition-all duration-200`}
          >
            {tab === "web" ? "Web Applications" : "Mobile Applications"}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid px-6 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => {
          const isLast = index === filteredProjects.length - 1;
          const itemsInLastRow = filteredProjects.length % 3 || 3;
          const isInIncompleteLastRow =
            filteredProjects.length > 3 &&
            index >= filteredProjects.length - itemsInLastRow;

          const shouldCenter = isLast && itemsInLastRow === 1;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className={`bg-neutral-950 border border-neutral-800 rounded-xl shadow-md p-6 flex flex-col h-full ${
                shouldCenter ? "col-span-1 lg:col-start-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h6 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h6>
              <p className="text-neutral-400 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-3 py-1 text-xs font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-900 font-medium hover:underline"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

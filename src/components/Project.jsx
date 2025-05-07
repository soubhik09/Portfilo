import React from "react";
import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Project() {
  return (
    <div id="projects">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-wrap justify-center py-8"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div variants={itemVariants} key={idx}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Project;

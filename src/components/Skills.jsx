import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Skills() {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once: false, amount:0.3}}
       className="mx-2 flex gap-10 flex-wrap rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20 justify-center">
        <motion.div variants={itemVariants}className="md:flex-1 flex flex-col justify-center items-center group">
          <FaHtml5 className="md:flex-1 text-4xl lg:text-6xl text-red-500 group-hover:animate-bounce transition-all duration-300" />
          <p>html</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <FaCss3Alt className="md:flex-1 text-4xl lg:text-6xl text-blue-500 group-hover:animate-bounce transition-all duration-300" />
          <p>css</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <IoLogoJavascript className="md:flex-1 text-4xl lg:text-6xl text-yellow-500 group-hover:animate-bounce transition-all duration-300" />
          <p>Javascript</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <RiReactjsLine className="md:flex-1 text-4xl lg:text-6xl text-cyan-400 group-hover:animate-bounce transition-all duration-300" />
          <p>React</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <SiMongodb className="md:flex-1 text-4xl lg:text-6xl text-green-600 group-hover:animate-bounce transition-all duration-300" />
          <p>Mongodb</p>
        </motion.div>
        <motion.div variants={itemVariants}className="md:flex-1 flex flex-col justify-center items-center group">
          <FaNodeJs className="md:flex-1 text-4xl lg:text-6xl text-green-600 group-hover:animate-bounce transition-all duration-300" />
          <p>NodeJS</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <SiExpress className="md:flex-1 text-4xl lg:text-6xl text-white group-hover:animate-bounce transition-all duration-300" />
          <p>Express</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <FaGitAlt className="md:flex-1 text-4xl lg:text-6xl text-orange-700 group-hover:animate-bounce transition-all duration-300" />
          <p>Git</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <SiSocketdotio className="md:flex-1 text-4xl lg:text-6xl text-white group-hover:animate-bounce transition-all duration-300" />
          <p>Socket.io</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <RiTailwindCssFill className="md:flex-1 text-4xl lg:text-6xl text-cyan-400 group-hover:animate-bounce transition-all duration-300" />
          <p>Tailwind</p>
        </motion.div>
        <motion.div variants={itemVariants} className="md:flex-1 flex flex-col justify-center items-center group">
          <FaFigma className="md:flex-1 text-4xl lg:text-6xl text-white group-hover:animate-bounce transition-all duration-300" />
          <p>Figma</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;

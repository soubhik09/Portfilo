import React from "react";
import video from "../assets/winner.mp4";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function AchievementSection() {
  return (
    <div id="award">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Award</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto flex max-w-6xl flex-wrap"
      >
        <motion.div
          variants={itemVariants}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full p-2 sm:w-1/2"
        >
          <video className="w-full rounded-lg" autoPlay muted loop playsInline>
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          variants={itemVariants}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full my-auto p-4 text-center sm:w-1/2"
        >
          <h2 className="mb-4 text-3xl">Voclet Entrance Exam – 2019</h2>
          <span className="mt-4 border-b border-yellow-400 py-2 text-xl font-semibold text-yellow-400 tracking-wide">
            10<sup>th</sup> RANK SECURED
          </span>
          <p className="m-4 p-2 italic md:text-justify text-center">
          Achieved a prestigious 10th rank in the West Bengal Voclet 2019 Examination, demonstrating academic excellence and competitive aptitude. This accomplishment highlights deep conceptual clarity, disciplined preparation, and high performance under pressure. It reflects a strong foundation in core subjects and a commitment to consistent academic growth.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AchievementSection;

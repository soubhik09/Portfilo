import React from "react";
import profilePic from "../assets/profilePic.png";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <>
      <div
        className="relative flex min-h-screen items-end justify-start md:justify-center"
        id="hero"
      >
        <motion.img
          src={profilePic}
          alt="Profile Picture"
          className="absolute inset-0 z-10 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        />
        <motion.div
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent fron-60% to-black lg:from-[30%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="z-20 mx-4 max-w-3xl pb-20 text-left md:text-center"
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            Soubhik<span className="block md:inline"> Pramanik</span>
          </h1>
          <p className="pt-2 font-semibold">
            Full-stack developer with a flair for UI design.
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default HeroSection;

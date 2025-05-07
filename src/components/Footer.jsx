import React from "react";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          viewport={{once: false, amount:0.3}}
        >
          <img src={logo} alt="logo" width={200} className="mb-2" />
          <div className="mb-10 h-3 w-12 bg-yellow-400"></div>
        </motion.figure>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map(({ Icon, href }, idx) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5*idx }}
            viewport={{once: false, amount:0.3}}
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              fontSize={25}
              className="hover:opacity-80 hover:text-yellow-400 transition-colors duration-300 ease-in-out"
            />
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        Made with love ❤️ &copy;2025 Soubhik. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

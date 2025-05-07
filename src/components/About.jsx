import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const paragraph = `I create dynamic, responsive websites that blend creativity with efficiency`;
  const words = paragraph.split(" ");

  return (
    <div className="container mx-auto overflow-hidden" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        About
      </motion.h2>
      <h3
        ref={ref}
        className="p-4 text-6xl uppercase lg:text-[8rem] flex flex-wrap"
      >
        {words.map((word, index) => {
          const start = index / (words.length - 1);
          const end = (index + 1) / (words.length - 1);

          const color = useTransform(
            scrollYProgress,
            [start, end],
            ["#fff", "#facc15"]
          );

          return (
            <motion.span
              key={index}
              style={{ color }}
              className="mr-2 inline-block"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          );
        })}
      </h3>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mr-24 pl-4 text-lg leading-loose"
      >
        Hello! I'm Soubhik Pramanik, a passionate full-stack developer with a strong eye for UI design. I genuinely enjoy writing clean, efficient code and never find it boring—every project feels like a creative puzzle. I love crafting seamless, user-friendly web experiences that balance aesthetics with functionality. My deep interest in emerging technologies keeps me constantly learning and innovating. Beyond development, photography is my creative outlet, and I find joy in capturing moments through the lens. Whether building a web app or exploring the latest tech, I approach every challenge with curiosity, creativity, and commitment to quality.
      </motion.p>
    </div>
  );
}

export default About;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const About = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const paragraph = `Hello! I'm Soubhik Pramanik, a full-stack developer with a flair for UI design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly.`;

//   const words = paragraph.split(" ");

//   return (
//     <div className="container mx-auto overflow-hidden p-8 min-h-[200vh]" id="about">
//       <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>

//       <h3 className="p-4 text-6xl uppercase lg:text-[5rem]">
//         I create dynamic, responsive websites
//       </h3>

//       <p ref={ref} className="flex flex-wrap text-6xl uppercase lg:text-[8rem]">
// {
//   words.map((word, index) => {
//     const start = index / words.length;
//     const end = (index + 1) / words.length;

//     const color = useTransform(
//       scrollYProgress,
//       [start, end],
//       ["#fff", "yellow"]
//     );

//     return (
//       <motion.span key={index} style={{ color }} className="mr-2">
//         {word}
//       </motion.span>
//     );
//   });
// }
//       </p>
//     </div>
//   );
// };

// export default About;

{
  /* <div className="container mx-auto overflow-hidden" id="about">
<h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
<h3 className="p-4 text-6xl uppercase lg:text-[8rem]">
  I create dynamic, responsive websites that blend creativity with
  efficiency
</h3>
<p className="mr-24 pl-4 text-lg leading-loose">
  Hello! I'm Soubhik Pramanik, a full-stack developer with a flair for
  UI design. I thrive on crafting web experiences that are not only
  visually stunning but also highly functional and user-friendly. My
  passion for detail ensures that every project is polished and
  professional. Beyond coding, I'm an avid explorer of new cultures and
  cuisines. My curiosity drives me to stay on the cutting edge of
  technology and design trends, bringing innovative and practical
  solutions to every challenge. Whether I'm developing a sleek website or
  diving into the latest tech, I am dedicated to delivering excellence in
  every project.
</p>
</div> */
}

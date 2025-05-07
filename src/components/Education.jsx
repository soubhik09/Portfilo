// import React from "react";
// import { EDUCATION } from "../constants";

// function Education() {
//   return (
//     <div
//       id="education"
//       className="container mx-auto mt-6 py-16 tracking-tighter"
//     >
//       <h2 className="mb-12 text-center text-4xl font-semibold">Education</h2>
//       <div className="mx-auto max-w-3xl">
//         {EDUCATION.map((item, idx) => (
//           <div
//             key={idx}
//             className="mx-4 mb-10 flex items-center justify-between rounded-lg border border-gray-600 p-6 md:flex-row hover:scale-110 transition-scale duration-300 ease-in-out"
//           >
//             <div>
//               <p className="font-bold">{item.degree}</p>
//               <p className="text-gray-400 italic mb-4">{item.institute}</p>
//               <p className="text-gray-400 italic">
//                 Percentage - {item.percentage}
//               </p>
//             </div>
//             <div>
//               <p className="text-gray-500 italic">{item.period}</p>
//               <p className="text-gray-600 italic">{item.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Education;


import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Education() {
  return (
    <div
      id="education"
      className="container mx-auto mt-6 py-16 tracking-tighter"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-12 text-center text-4xl font-semibold"
      >
        Education
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto max-w-3xl"
      >
        {EDUCATION.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="mx-4 mb-10 flex items-center justify-between rounded-lg border border-gray-600 p-6 md:flex-row hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div>
              <p className="font-bold">{item.degree}</p>
              <p className="text-gray-400 italic mb-4">{item.institute}</p>
              <p className="text-gray-400 italic">
                Percentage - {item.percentage}
              </p>
            </div>
            <div>
              <p className="text-gray-500 italic">{item.period}</p>
              <p className="text-gray-600 italic">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Education;

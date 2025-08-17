import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 text-center bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-[0_0_8px_rgba(0,200,255,0.7)]"
      >
        Resume
      </motion.h2>
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="inline-block px-8 py-3 bg-gray-900 text-blue-300 rounded-full font-semibold shadow-lg border border-blue-400 drop-shadow-[0_0_8px_rgba(0,200,255,0.5)] hover:bg-gray-800 hover:text-blue-100 transition"
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Resume;

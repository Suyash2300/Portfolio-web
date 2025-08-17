import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="inline text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="inline text-green-500" /> },
  { name: "Express", icon: <SiExpress className="inline text-gray-300" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="inline text-yellow-400" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="inline text-sky-400" />,
  },
  { name: "Node.js", icon: <SiNodedotjs className="inline text-green-600" /> },
];

const SkillRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500); // slower, smoother change
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 flex items-center justify-center space-x-3 text-xl md:text-2xl font-semibold">
      <AnimatePresence mode="wait">
        <motion.div
          key={skills[index].name}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex items-center space-x-2 text-blue-400"
        >
          <span className="text-2xl">{skills[index].icon}</span>
          <span>{skills[index].name}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Floating background circles */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full top-[-100px] left-[-100px] animate-pulseSlow"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] bg-cyan-400/10 rounded-full bottom-[-80px] right-[-80px] animate-pulseSlow"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-4"
      >
        Hi, I’m{" "}
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,200,255,0.7)] bg-gradient-to-r from-blue-400 to-cyan-400"
        >
          Suyash
        </motion.span>{" "}
        <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="inline-block"
        >
          👋
        </motion.span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed"
      >
        A passionate{" "}
        <span className="text-cyan-400 drop-shadow-[0_0_6px_rgba(0,200,255,0.5)] font-semibold">
          Web Developer
        </span>{" "}
        skilled in{" "}
        <span className="text-sky-400 drop-shadow-[0_0_6px_rgba(0,200,255,0.5)] font-semibold">
          MERN Stack
        </span>{" "}
        &{" "}
        <span className="text-blue-300 drop-shadow-[0_0_6px_rgba(0,200,255,0.5)] font-semibold">
          TailwindCSS
        </span>
        . I build modern, responsive, and user-friendly web apps.
      </motion.p>

      {/* Smooth Rotating Skills */}
      <SkillRotator />

      {/* CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 25px rgba(0,200,255,0.8)",
        }}
        className="mt-8 px-8 py-4 rounded-full font-semibold text-blue-200 bg-gradient-to-r from-blue-900/80 to-blue-700/80 border border-blue-300 shadow-lg drop-shadow-[0_0_12px_rgba(0,200,255,0.5)] hover:from-blue-800/90 hover:to-blue-600/90 transition-all"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;

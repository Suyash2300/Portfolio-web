import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

// Skills data
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact className="inline text-cyan-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="inline text-sky-400" />,
      },
      {
        name: "HTML",
        icon: <span className="inline text-orange-400">HTML</span>,
      },
      { name: "CSS", icon: <span className="inline text-blue-400">CSS</span> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="inline text-yellow-400" />,
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="inline text-green-600" />,
      },
      { name: "Express", icon: <SiExpress className="inline text-gray-300" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="inline text-green-500" />,
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="inline text-red-500" /> },
      { name: "GitHub", icon: <SiGithub className="inline text-gray-200" /> },
      { name: "Vercel", icon: <SiVercel className="inline text-white" /> },
      {
        name: "Postman",
        icon: <SiPostman className="inline text-orange-500" />,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="inline text-blue-400" />,
      },
    ],
  },
];

const About = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % allSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="px-6 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-12 text-blue-400 drop-shadow-[0_0_12px_rgba(0,200,255,0.7)]"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.div
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {"I am a fresher Web Developer with strong skills in MERN Stack, TailwindCSS, and modern web design. I have built two major projects that showcase my ability to develop scalable, responsive, and user-friendly applications."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`inline-block mr-1 ${
                  word.includes("Web Developer") &&
                  "text-blue-300 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]"
                } ${
                  word.includes("MERN Stack") &&
                  "text-cyan-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]"
                } ${
                  word.includes("TailwindCSS") &&
                  "text-sky-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]"
                } ${
                  word.includes("projects") &&
                  "text-cyan-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]"
                }`}
              >
                {word}
              </motion.span>
            ))}
        </motion.div>

        {/* Skill Rotator */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={allSkills[currentSkill].name}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex items-center justify-center space-x-3 text-2xl md:text-3xl font-semibold text-blue-400"
            >
              <span>{allSkills[currentSkill].icon}</span>
              <span>{allSkills[currentSkill].name}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skill Cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-gray-950 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer w-44"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {cat.category}
              </h3>
              <p className="text-gray-400 text-sm flex flex-wrap gap-2">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="flex items-center gap-1">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

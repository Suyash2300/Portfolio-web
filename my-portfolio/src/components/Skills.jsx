import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVscodium, // ✅ VS Code fixed
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { icon: <SiHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <SiCss3 className="text-blue-500" />, name: "CSS" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript",
      },
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
      { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: <SiGit className="text-red-500" />, name: "Git" },
      { icon: <SiGithub className="text-gray-300" />, name: "GitHub" },
      { icon: <SiPostman className="text-orange-400" />, name: "Postman" },
      { icon: <SiVercel className="text-white" />, name: "Vercel" },
      { icon: <SiVscodium className="text-blue-400" />, name: "VS Code" }, // ✅ works
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">⚡ Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skills.map((group, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
              <div className="grid grid-cols-3 gap-6">
                {group.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex flex-col items-center justify-center space-y-2"
                  >
                    <div className="text-5xl">{item.icon}</div>
                    <p className="text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

const projects = [
  {
    title: "FreshCart",
    description: "Modern grocery shopping app with authentication & payments.",
    repo: "https://github.com/Suyash2300/FreshCart",
    live: "https://fresh-cart-snowy.vercel.app/",
    img: "/image.png",
  },
  {
    title: "BookMyTicket",
    description:
      "Online ticket booking platform with seat selection, payments, and user authentication.",
    repo: "https://github.com/Suyash2300/BookMyTicket",
    live: "https://book-myticket.vercel.app/",
    img: "/bookmyticket2.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-black text-white px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400 drop-shadow-[0_0_8px_rgba(0,200,255,0.7)]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #00c8ff" }}
                className="bg-gray-900 rounded-2xl p-6 shadow-md border border-blue-300/30 transition-transform cursor-pointer"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="rounded-xl mb-4 border border-blue-300/30 w-full h-auto object-contain"
                />

                <h3 className="text-xl font-semibold text-blue-300 mb-2 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]">
                  {p.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">{p.description}</p>
                <div className="flex gap-6 text-blue-400 text-2xl drop-shadow-[0_0_5px_rgba(0,200,255,0.5)]">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-200 transition"
                    onClick={(e) => e.stopPropagation()} // prevent outer link from triggering
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-200 transition"
                    onClick={(e) => e.stopPropagation()} // prevent outer link from triggering
                  >
                    <SiVercel />
                  </a>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          MyPortfolio
          <span className="text-blue-400 drop-shadow-[0_0_8px_rgba(0,200,255,0.7)]">
            .
          </span>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            to="/home"
            className="hover:text-blue-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-cyan-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="hover:text-cyan-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-sky-400 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-300 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons + Resume */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Suyash2300"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-400 hover:text-blue-200 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/suyash-patil-695506337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-cyan-400 hover:text-cyan-200 drop-shadow-[0_0_5px_rgba(0,200,255,0.5)] transition"
          >
            <FaLinkedin />
          </a>
          {/* Resume Button */}
          <a
            href="/resume.pdf" // Replace with your resume path or external link
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm md:text-base font-semibold rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

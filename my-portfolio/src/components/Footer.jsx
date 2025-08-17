import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} Suyash. Built with ❤️ using React &
        TailwindCSS.
      </p>
    </footer>
  );
};

export default Footer;

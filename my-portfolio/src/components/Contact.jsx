import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: <FaEnvelope className="text-orange-500" />,
    label: "Email",
    value: "zorororonoa2300@gmail.com",
    link: "mailto:zorororonoa2300@gmail.com",
  },
  {
    icon: <FaPhone className="text-green-500" />,
    label: "Phone",
    value: "+91 7666914445",
    link: "#",
  },
  {
    icon: <FaMapMarkerAlt className="text-blue-500" />,
    label: "Location",
    value: "Kolhapur, India",
    link: "#",
  },
  {
    icon: <FaInstagram className="text-pink-500" />,
    label: "Instagram",
    value: "suyash_patil_7777",
    link: "https://instagram.com/suyash_patil_7777",
  },
  {
    icon: <FaLinkedin className="text-cyan-400" />,
    label: "LinkedIn",
    value: "Suyash Patil",
    link: "https://www.linkedin.com/in/suyash-patil-695506337/",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white px-6 md:px-16 lg:px-32"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{contact.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{contact.label}</h3>
            <p className="text-gray-200 text-center">{contact.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

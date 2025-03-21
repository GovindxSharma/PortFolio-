import React from "react";
import { FaEnvelope, FaPhone, FaCopy, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const email = "govindsharma2839@gmail.com";
  const phone = "9712935176";

  // Function to copy text
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section id="contact" className="py-12 bg-[#0F2648] pt-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-8 tracking-wide drop-shadow-lg">
        Contact Me
      </h2>
      
      

        {/* Contact Info */}
        <div className="mt-8 space-y-6">
          {/* Email */}
          <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4 shadow-lg w-full sm:w-96 mx-auto">
            <FaEnvelope className="text-blue-400 text-2xl mr-3" />
            <span className="text-lg">{email}</span>
            <button
              onClick={() => copyToClipboard(email)}
              className="ml-3 text-gray-400 hover:text-blue-400"
            >
              <FaCopy />
            </button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-center bg-gray-800 rounded-lg p-4 shadow-lg w-full sm:w-96 mx-auto">
            <FaPhone className="text-green-400 text-2xl mr-3" />
            <span className="text-lg">{phone}</span>
            <button
              onClick={() => copyToClipboard(phone)}
              className="ml-3 text-gray-400 hover:text-green-400"
            >
              <FaCopy />
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-3xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/9712935176" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-white text-3xl">
              <FaWhatsapp />
            </a>
            <a href="https://t.me/your-telegram-username" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white text-3xl">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

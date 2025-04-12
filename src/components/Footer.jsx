import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 pt-12">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    <div className="mb-4 md:mb-0 text-center md:text-left">
      <h1 className="text-xl font-semibold">የኢትዮጵያ ቀን መቁጠሪያ</h1>
      <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
    </div>

    <div className="flex space-x-4 text-gray-400 text-xl">
      <a href="https://github.com/ela123" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/elias-worku-3982b521a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
        <FaLinkedin />
      </a>
      <a href="" className="hover:text-white transition">
        <FaEnvelope />
      </a>
    </div>
  </div>
</footer>

);
};


export default Footer
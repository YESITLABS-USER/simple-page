// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-white hover:text-blue-500 transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Logo - Align to the right */}
        <div className="text-2xl font-bold ml-4">
          Deva Gallery
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-sm text-gray-400">
        <p>&copy; 2025 Your Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

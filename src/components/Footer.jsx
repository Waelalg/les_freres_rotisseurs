import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 sm:px-8 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
        {/* Left Section: Name and Contact Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Les Frères Rôtisseurs</h3>
          <p className="text-sm sm:text-base text-gray-300">Contact: 123-456-7890</p>
          <p className="text-sm sm:text-base text-gray-300">Email: your.email@example.com</p>
          <p className="text-sm sm:text-base text-gray-300">Location: Your City, Your Country</p>
        </div>

        {/* Middle Section: Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4 sm:mb-0">
          <a
            href="https://www.facebook.com/profile.php?id=100080283553333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-orange-500 hover:text-yellow-400 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-orange-500 hover:text-yellow-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/lesfreresrotisseurs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-orange-500 hover:text-yellow-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-yellow-400">Les Frères Rôtisseurs</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

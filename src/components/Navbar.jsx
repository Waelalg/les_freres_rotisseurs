import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/log.jpg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Section: Logo and Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 mr-3 rounded-full border-2 border-orange-500"
          />
          <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">
            Les Frères <span className="text-yellow-500">Rôtisseurs</span>
          </h1>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100080283553333"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/log.jpg";

export default function Navbar() {
  const dayLocations = {
    mercredi: ["Fontaines d'Ouches"],
    jeudi: ["Marché des Grésilles (Dijon)"],
    vendredi: ["Auxonne"],
    samedi: ["Marché des Grésilles", "Dole", "Genlis"],
    dimanche: [
      "Saint Apollinaire",
      "Chenove",
      "Gevrey-Chambertin",
      "Chevigny-Saint-Saveur",
    ],
  };

  const [hoveredDay, setHoveredDay] = useState(null);

  const scrollToCard = (location: string) => {
    const element = document.getElementById(location.replace(/\s+/g, "-").toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Name */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 mr-3 rounded-full border-2 border-orange-500"
            />
            <h1 className="text-2xl font-bold text-gray-800 hidden sm:block">
              Les Frères <span className="text-yellow-500">Rôtisseurs</span>
            </h1>
          </a>
        </div>

        {/* Dropdown Menus */}
        <div className="flex flex-grow justify-center space-x-8">
          <div className="relative group">
            <button className="text-lg font-semibold text-gray-950 py-2 px-4 hover:bg-gray-100">
              Planning
            </button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md rounded-lg w-48 z-10">
              <ul>
                {Object.keys(dayLocations).map((day, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                      {day}
                    </button>
                    {hoveredDay === day && (
                      <div className="absolute left-full top-0 bg-white shadow-md rounded-lg w-48 z-10">
                        <ul>
                          {dayLocations[day].map((location, locIndex) => (
                            <li key={locIndex}>
                              <button
                                onClick={() => scrollToCard(location)}
                                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {location}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-orange-500 hover:text-orange-600"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

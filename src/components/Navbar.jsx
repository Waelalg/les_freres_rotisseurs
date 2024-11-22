import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";
import logo from "../assets/log.jpg";
import MenuPopup from "./MenuPopup";

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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  const scrollToCard = (location) => {
    const cardId = location.toLowerCase().replace(/[\s()]+/g, '-');
    const element = document.getElementById(cardId);
    if (element) {
      // Close all menus first
      setIsMenuOpen(false);
      setIsDropdownOpen(false);

      // Wait for menus to close and layout to stabilize
      setTimeout(() => {
        const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const isMobile = window.innerWidth < 768; // Check if we're on mobile
        
        // Add extra offset for mobile to account for any floating elements
        const mobileOffset = isMobile ? 20 : 0;
        const offsetPosition = elementPosition - navbarHeight - 20 - mobileOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300); // Increased timeout to ensure menus are fully closed
    } else {
      console.error(`Card with id "${cardId}" not found`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Name */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-10 md:h-12 md:w-12 mr-2 md:mr-3 rounded-full border-2 border-orange-500"
                />
                <h1 className="text-lg md:text-2xl font-bold text-gray-800">
                  Les Frères <span className="text-yellow-500">Rôtisseurs</span>
                </h1>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-grow">
              <div className="flex items-center space-x-6">
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <FaMapMarkerAlt className="mr-1" />
                    Planning
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {Object.entries(dayLocations).map(([day, locations]) => (
                          <div key={day} className="px-4 py-2">
                            <p className="text-sm font-medium text-gray-900">{day}</p>
                            {locations.map((location) => (
                              <button
                                key={location}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => scrollToCard(location)}
                              >
                                {location}
                              </button>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <FaUtensils className="mr-1" />
                  Menu
                </button>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="pt-4 pb-2">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                    setIsMenuOpen(false);
                  }}
                >
                  <FaMapMarkerAlt className="inline mr-2" />
                  Planning
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                  onClick={() => {
                    setIsPopupOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  <FaUtensils className="inline mr-2" />
                  Menu
                </button>
              </div>
              <div className="flex justify-center space-x-6 pt-2 border-t border-gray-200">
                <a
                  href="https://www.facebook.com"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <MenuPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsDropdownOpen(false)}>
          <div className="bg-white w-64 h-full overflow-y-auto absolute right-0 top-0 pt-16">
            <div className="p-4">
              <button
                onClick={() => setIsDropdownOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-lg font-semibold mb-2">Planning</h2>
              {Object.entries(dayLocations).map(([day, locations]) => (
                <div key={day} className="mb-4">
                  <h3 className="text-md font-medium mb-1">{day}</h3>
                  {locations.map((location) => (
                    <button
                      key={location}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => scrollToCard(location)}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
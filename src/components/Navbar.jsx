import React, { useState, useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes, FaMapMarkerAlt, FaUtensils, FaImages } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import MenuPopup from "./MenuPopup";
import logo from "../assets/log.png"

const dayLocations = {
  Mercredi: ["Fontaines d'Ouches"],
  Jeudi: ["Marché des Grésilles (Dijon)"],
  Vendredi: ["Auxonne"],
  Samedi: ["Marché des Grésilles (Dijon)", "Dole", "Genlis"],
  Dimanche: [
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
  const [mobileView, setMobileView] = useState('main');
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const location = useLocation();

  const isGalerieRoute = location.pathname === '/galerie';

  const scrollToCard = (location) => {
    const cardId = location.toLowerCase().replace(/[\s()]+/g, "-");
    const element = document.getElementById(cardId);

    if (element) {
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
      setMobileView('main');

      setTimeout(() => {
        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = elementTop - navbarHeight - 10;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }, 200);
    } else {
      console.error(`Card with id "${cardId}" not found.`);
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

  const handleMobileMenuClick = (view) => {
    setMobileView(view);
    if (view === 'menu') {
      setIsPopupOpen(true);
    }
  };

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
            <div className="hidden md:flex items-center justify-center flex-grow lg:justify-center">
              <div className="flex items-center space-x-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                {/* Dropdown */}
                {!isGalerieRoute && (
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                    >
                      <FaMapMarkerAlt className="mr-1" aria-hidden="true" />
                      <span>Planning</span>
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
                                  role="menuitem"
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
                )}

                {/* Menu Button */}
                <button
                  className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center"
                  onClick={() => setIsPopupOpen(true)}
                >
                  <FaUtensils className="mr-1" aria-hidden="true" />
                  <span>Menu</span>
                </button>

                {/* Gallery Link */}
                <a href="/galerie" className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center">
                  <FaImages className="mr-1" aria-hidden="true" />
                  <span>Galerie</span>
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100080283553333"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/lesfreresrotisseurs/"
                className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              {mobileView === 'main' && (
                <div className="pt-4 pb-2 flex flex-col space-y-2">
                  {!isGalerieRoute && (
                    <button
                      className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center justify-center"
                      onClick={() => handleMobileMenuClick('planning')}
                    >
                      <FaMapMarkerAlt className="mr-1" aria-hidden="true" />
                      <span>Planning</span>
                    </button>
                  )}
                  <button
                    className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center justify-center"
                    onClick={() => handleMobileMenuClick('menu')}
                  >
                    <FaUtensils className="mr-1" aria-hidden="true" />
                    <span>Menu</span>
                  </button>
                  <a 
                    href="/galerie" 
                    className="text-gray-600 hover:text-gray-900 focus:outline-none flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaImages className="mr-1" aria-hidden="true" />
                    <span>Galerie</span>
                  </a>
                </div>
              )}
              {mobileView === 'planning' && !isGalerieRoute && (
                <div className="pt-4 pb-2">
                  {Object.entries(dayLocations).map(([day, locations]) => (
                    <div key={day} className="mb-2">
                      <h3 className="text-md font-medium text-gray-700 px-4">{day}</h3>
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
              )}
              <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-200">
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com"
                    className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="text-orange-500 hover:text-orange-600 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      <MenuPopup isOpen={isPopupOpen} onClose={() => {
        setIsPopupOpen(false);
        setMobileView('main');
      }} />
    </>
  );
}


import React, { useState } from 'react';

const Card = ({ title, subhead, description, imageUrl, phoneNumber, location }) => {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = () => {
    setShowPhone(!showPhone);
  };

  const handleLocationClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
        {subhead && <h3 className="text-md text-gray-600 italic mb-3">{subhead}</h3>}
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePhoneClick}
            className="text-orange-500 font-bold hover:text-orange-600 transition-colors duration-300"
          >
            {showPhone ? phoneNumber : 'Show Phone'}
          </button>
          <button 
            onClick={handleLocationClick}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
          >
            Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import { FaTimes } from 'react-icons/fa';

const MenuPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-orange-500">Notre Carte</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Poulets</h3>
            <div className="space-y-2 text-gray-600">
              <p>Poulet Rôti : 11,50€</p>
              <p>Demi Poulet Rôti : 6,00€</p>
              <p>Poulet Fermier : 18,90€</p>
              <p>Demi Fermier : 9,50€</p>
              <p>Cuisse de poulet : 3,50€</p>
              <p>Saucisse de volaille : 2,50€</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Pommes de terres grillées</h3>
            <div className="space-y-2 text-gray-600">
              <p>Petite: 3,00€</p>
              <p>Moyenne: 4,50€</p>
              <p>Grande: 6,00€</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Extras</h3>
            <div className="space-y-2 text-gray-600">
              <p>Pot de sauce: 1,50€</p>
              <p>Pain oriental: 1,20€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;


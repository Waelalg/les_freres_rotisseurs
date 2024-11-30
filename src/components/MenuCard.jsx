import React from 'react'

const MenuItemCard = ({ item }) => {
  return (
    <div className="relative w-64 rounded-xl overflow-hidden border-1 border-orange-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Main content */}
      <div className="p-4">
        {/* Image */}
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* Name */}
        <h3 className="text-lg font-semibold text-center mb-2 text-orange-800">
          {item.name}
        </h3>

        {/* Price */}
        <div className="text-center text-xl font-bold mb-4 text-orange-600">
          ${item.price.toFixed(2)}
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard


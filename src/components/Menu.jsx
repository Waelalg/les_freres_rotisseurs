import React from 'react';
import MenuItemCard from './MenuCard';
import img1 from "../assets/galeri/88f3f9e0-5a02-4c66-a4c7-7d1f752b5369.jpg";

const Menu = () => {
  const menuItems = [
    { id: 1, name: "Poulet rôti", image: img1, price: 11.50, rating: 4.5 },
    { id: 2, name: "Demi Poulet rôti", image: img1, price: 6.00, rating: 4.0 },
    { id: 3, name: "Poulet fermier", image: img1, price: 18.90, rating: 4.2 },
    { id: 4, name: "Demi Poulet fermier", image: img1, price: 9.50, rating: 4.3 },
    { id: 5, name: "Cuisse de poulet", image: img1, price: 3.50, rating: 4.3 },
    { id: 6, name: "Saucisse de volaille", image: img1, price: 2.50, rating: 4.3 },
    { id: 7, name: "Pain oriental", image: img1, price: 1.20, rating: 4.3 },
    { id: 8, name: "Pot de sauce", image: img1, price: 1.50, rating: 4.3 },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 justify-center items-center">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* Carte du menu */}
          <MenuItemCard item={item} />

          {/* Forcer un retour à la ligne après les items 2, 4, 6, 7, et 8 */}
          {[1, 3, 5, 6, 7].includes(index) && <div className="col-span-full"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;

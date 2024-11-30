import React from 'react'
import MenuItemCard from './MenuCard'
import img1 from "../assets/galeri/88f3f9e0-5a02-4c66-a4c7-7d1f752b5369.jpg"
import img2 from "../assets/galeri/IMG_8149.jpeg"

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Mex Burger",
      image: img1,
      price: 11.20,
      rating: 4.5
    },
    {
      id: 2,
      name: "Classic Burger",
      image: img2,
      price: 10.99,
      rating: 4.0
    },
    {
      id: 3,
      name: "Veggie Burger",
      image: img2,
      price: 12.50,
      rating: 4.2
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img1,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img1,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img2,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img1,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img2,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img1,
      price: 11.99,
      rating: 4.3
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: img2,
      price: 11.99,
      rating: 4.3
    }
  ]

  return (

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
   
  )
}

export default Menu


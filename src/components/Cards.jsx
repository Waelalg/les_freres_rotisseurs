import React from 'react';
import Card from './Card';
import img1 from '../assets/cards/gettyimages-1558684667-612x612.jpg'

const CardsComponent = () => {
  const chickenDishes = [
    {
      title: "Fontaines d'Ouches",
      subhead : "Mercredi",
      description: "Crispy on the outside, juicy on the inside. Our secret blend of spices makes this a fan favorite.",
      imageUrl: img1,
      phoneNumber: "+1 (123) 456-7890",
      location: "123 Main St, Anytown, USA"
    },
    {
      title: "Marché des Grésilles (Dijon)",
      subhead : "Jeudi",
      description: "Tender grilled chicken breast marinated in lemon and herbs. Served with a side of roasted vegetables.",
      imageUrl: img1,
      phoneNumber: "+1 (234) 567-8901",
      location: "456 Oak Ave, Somewhere City, USA"
    },
    {
      title: "Auxonne",
      subhead : "Vendredi",
      description: "Crispy chicken wings tossed in our homemade buffalo sauce. Served with celery sticks and blue cheese dip.",
      imageUrl: img1,
      phoneNumber: "+1 (345) 678-9012",
      location: "789 Elm St, Another Town, USA"
    },
    {
      title: "Marché des Grésilles",
      subhead : "Samedi",
      description: "Breaded chicken breast topped with marinara sauce and melted mozzarella. Served with spaghetti.",
      imageUrl: img1,
      phoneNumber: "+1 (456) 789-0123",
      location: "101 Pine Rd, Elsewhere, USA"
    },
    {
      title: "Dole",
      subhead : "Samedi",
      description: "Our signature pizza crust topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Genlis",
      subhead : "Samedi",
      description: "Fresh romaine lettuce, grilled chicken, croutons, and parmesan cheese tossed in Caesar dressing.",
      imageUrl: img1,
      phoneNumber: "+1 (678) 901-2345",
      location: "303 Cedar Blvd, Anyplace, USA"
    },
    {
      title: "Saint Apollinaire",
      subhead : "Dimanche",
      description: "Our signature pizza crust topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Chenove",
      subhead : "Dimanche",
      description: "Our signature pizza crust topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Gevrey-Chambertin",
      subhead : "Dimanche",
      description: "Our signature pizza crust topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Chevigny-Saint-Saveur",
      subhead : "Dimanche",
      description: "Our signature pizza crust topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Our Chicken Specialties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chickenDishes.map((dish, index) => (
            <Card
              key={index}
              title={dish.title}
              subhead={dish.subhead}
              description={dish.description}
              imageUrl={dish.imageUrl}
              phoneNumber={dish.phoneNumber}
              location={dish.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;


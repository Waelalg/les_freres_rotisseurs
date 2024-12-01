import React from "react";
import Card from "./Card";
import img1 from "../assets/cards/fontaines_douche.jpg";
import img2 from "../assets/cards/dole.jpg";
import img3 from "../assets/cards/gresilles.jpeg";
import img4 from "../assets/cards/gresillessamedi.jpg";
import img5 from "../assets/cards/saint_apo.jpg"


const CardsComponent = () => {
  const chickenDishes = [
    {
      title: "Fontaines d'Ouches",
      subhead: "Mercredi",
      description: "Retrouvez nous au marché de Fontaines d'Ouches à coté de Action, Intermarché et Basic-Fit",
      imageUrl: img1,
      phoneNumber: "+1 (123) 456-7890",
      location: "123 Main St, Anytown, USA",
    },
    {
      title: "Marché des Grésilles (Dijon)",
      subhead: "Jeudi",
      description: "Nous sommes au marché de gresilles sur Dijon à l'entrée juste en face de La Poste",
      imageUrl: img3,
      phoneNumber: "+1 (234) 567-8901",
      location: "456 Oak Ave, Somewhere City, USA",
    },
    {
      title: "Auxonne",
      subhead: "Vendredi",
      description: "Les vendredis à Auxonne en face de l'église",
      imageUrl: img1,
      phoneNumber: "+1 (345) 678-9012",
      location: "789 Elm St, Another Town, USA"
    },
    {
      title: "Marché des Grésilles",
      subhead: "Samedi",
      description: "Au marché de gresillés tout comme les jeudis",
      imageUrl: img4,
      phoneNumber: "+1 (456) 789-0123",
      location: "101 Pine Rd, Elsewhere, USA"
    },
    {
      title: "Dole",
      subhead: "Samedi",
      description: "Venez nous voir sur Dole aussi au marché!",
      imageUrl: img2,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Genlis",
      subhead: "Samedi",
      description: "Nous sommes sur Genlis au marché en face de la Poste",
      imageUrl: img1,
      phoneNumber: "+1 (678) 901-2345",
      location: "303 Cedar Blvd, Anyplace, USA"
    },
    {
      title: "Saint Apollinaire",
      subhead: "Dimanche",
      description: "A Saint Apollinaire juste après le Lidl, en face du bureau tabac et boulangerie Maison Oudot",
      imageUrl: img5,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Chenôve",
      subhead: "Dimanche",
      description: "Rejoignez-nous au marché de Chenôve",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Gevrey-Chambertin",
      subhead: "Dimanche",
      description: "",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    },
    {
      title: "Chevigny-Saint-Saveur",
      subhead: "Dimanche",
      description: "",
      imageUrl: img1,
      phoneNumber: "+1 (567) 890-1234",
      location: "202 Maple Ave, Nowheresville, USA"
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-12 pt-24">
      <div className="container mx-auto px-4 rounded-sm">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
          Our Chicken Specialties
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chickenDishes.map((dish, index) => (
            <Card
              key={index}
              id={dish.title.replace(/[\s()]+/g, "-").toLowerCase()} // Convert title to ID-friendly format
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

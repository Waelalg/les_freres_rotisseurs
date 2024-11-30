import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img1 from "../assets/galeri/88f3f9e0-5a02-4c66-a4c7-7d1f752b5369.jpg";
import img2 from "../assets/swiper/swiper.jpg";
import img3 from "../assets/swiper/ebe50f15-3fce-4aae-a49f-afe21f41e1a6.jpg";


const Swiper = () => {
  const slides = [
    { 
      url: img1, 
      title: "Meilleur poulet rôti de Dijon et alentours!", 
      description: "Venez gouter à notre délicieux poulet rôti sur nos différents marchés" 
    },
    { 
      url: img2, 
      title: "Goutez pas qu'à notre poulet rôti, mais à nos différentes autres options aussi", 
      description: "Accompagnez le poulet par des pommes de terre grillées qui ont une saveur unique, et de la sauce préparée avec soin (tomates, poivrons, oignons, olives)" 
    },
    { 
      url: img3, 
      title: "Rajoutez au tout des accompagnements", 
      description: "Des saucisses de volaille, cuisses de poulet qui vous feront revenir à chaque bouchée" 
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full m-auto px-4 relative group mt-4 sm:mt-6 lg:mt-8 pt-16 pb-6">
      {/* Swiper Image with blur effect */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] bg-center bg-cover rounded-2xl duration-500"
      >
        {/* Apply blur effect to the image */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-2xl"></div>

        {/* Text Overlay - Aligned to Top Left */}
        <div className="absolute bottom-5 left-5 text-yellow-100 z-10">
          <h2 className="text-xl sm:text-2xl font-bold">{slides[currentIndex].title}</h2>
          <p className="text-sm sm:text-base mt-2 text-yellow-10">{slides[currentIndex].description}</p>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/50 hover:bg-orange-500 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/50 hover:bg-orange-500 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex
                ? 'text-yellow-400 scale-125'
                : 'text-gray-500 hover:text-yellow-300'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;

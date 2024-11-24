import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import img1 from "../assets/swiper/comment-faire-un-poulet-a-lamericaine-butterfly-chicken-.jpg";
import img2 from "../assets/swiper/gettyimages-1127798962-612x612.jpg";
import img3 from "../assets/swiper/istockphoto-1369184877-612x612.jpg";
import img4 from "../assets/swiper/istockphoto-496588523-612x612.jpg";

const Swiper = () => {
  const slides = [
    { 
      url: img1, 
      title: "MagFlow - Project Overview", 
      description: "An overview of the MagFlow project, designed to manage store operations." 
    },
    { 
      url: img2, 
      title: "Project Proposal Presentation", 
      description: "A detailed proposal presentation for the project." 
    },
    { 
      url: img3, 
      title: "Beautiful Landscape", 
      description: "A serene landscape showcasing nature's beauty." 
    },
    { 
      url: img4, 
      title: "Amazing Architecture", 
      description: "Innovative architectural design in urban spaces." 
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

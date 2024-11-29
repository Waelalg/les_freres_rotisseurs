import React from 'react'
import img1 from "../../assets/cards/fontaines_douche.jpg";
import img2 from "../../assets/cards/dole.jpg"
import img3 from "../../assets/cards/gresilles.jpeg"
import img4 from "../../assets/cards/gresillessamedi.jpg"
import img5 from "../../assets/cards/saint_apo.jpg"
import img6 from "../../assets/swiper/6d03387f-ef10-4217-be6a-ad37fba9f8e6.jpg"
import img7 from "../../assets/swiper/IMG_8633.jpeg"
import img8 from "../../assets/swiper/swiper.jpg"
import img9 from "../../assets/galeri/88f3f9e0-5a02-4c66-a4c7-7d1f752b5369.jpg"
import img10 from "../../assets/galeri/IMG_8149.jpeg"
import img11 from "../../assets/galeri/ebe50f15-3fce-4aae-a49f-afe21f41e1a6.jpg"


const Galerie = () => {
  // This is example data. Replace with your actual gallery images.
  const images = [
    { src: img1, alt: 'Gallery Image 1' },
    { src: img2, alt: 'Gallery Image 2' },
    { src: img3, alt: 'Gallery Image 3' },
    { src: img4, alt: 'Gallery Image 4' },
    { src: img5, alt: 'Gallery Image 5' },
    { src: img6, alt: 'Gallery Image 6' },
    { src: img7, alt: 'Gallery Image 6' },
    { src: img8, alt: 'Gallery Image 6' },
    { src: img9, alt: 'Gallery Image 6' },
    { src: img10, alt: 'Gallery Image 6' },
    { src: img11, alt: 'Gallery Image 6' },

  ];

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Notre Galerie</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Galerie


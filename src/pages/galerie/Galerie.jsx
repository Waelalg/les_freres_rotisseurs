import React from 'react'
import imgg from "../../assets/cards/fontaines_douche.jpg"

const Galerie = () => {
  // This is example data. Replace with your actual gallery images.
  const images = [
    { src: imgg, alt: 'Gallery Image 1' },
    { src: imgg, alt: 'Gallery Image 2' },
    { src: imgg, alt: 'Gallery Image 3' },
    { src: imgg, alt: 'Gallery Image 4' },
    { src: imgg, alt: 'Gallery Image 5' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
    { src: imgg, alt: 'Gallery Image 6' },
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


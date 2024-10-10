import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SearchBar from  '../SearchBar/SearchBar'
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, []);

  return (
    <div className="relative w-full h-64 z-0 ">
      {images.map((image, index) => (
        <div
          key={index}
          /* absolute helps to stack the images upon each  */
          className={` absolute top-0 left-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out 
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            
            `}
        >
          <img
            src={image}
            className="w-full h-full object-cover "
          />
        </div>
        
      ))}
      <SearchBar></SearchBar>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-slate-50' : 'bg-slate-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// Usage example:
// const images = [
//  link1,
//  link2
// ];
// <Carousel images={images} />
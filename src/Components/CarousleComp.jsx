import React, { useEffect, useRef, useState } from 'react'


const CarousleComp = ({images,autoSlideInterval = 2000}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const touchStartRef = useRef(null);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevImage = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };

      const startAutoSlide = () => {
        intervalRef.current = setInterval(nextImage, autoSlideInterval);
      };
    
      const stopAutoSlide = () => {
        clearInterval(intervalRef.current);
      };

      const handleTouchStart = (e) => {
        touchStartRef.current = e.touches[0].clientX;
      };

      const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStartRef.current - touchEnd > 50) {
          nextImage(); // Swipe left
        } else if (touchStartRef.current - touchEnd < -50) {
          prevImage(); // Swipe right
        }
      };

      useEffect(() => {
        startAutoSlide();
        return () => {
          stopAutoSlide();
        };
      }, []);

  return (
    <div className='text-center p-2'>
        <button onClick={prevImage} className='carousel-button'><img src="src/assets/left-arrow.png" /></button>
        <img className='carousle-img border border-5 ' src={images[currentIndex]} alt="carousel" />
        <button onClick={nextImage} className='carousel-button'><img className='arrows-click bg-transparent' src="src/assets/right-arrow.png" /></button>
    </div>
  )
}

export default CarousleComp
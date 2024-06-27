import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import black from '../img/black.png'; // Adjust the import paths accordingly
import white from '../img/white.png';
import orange from '../img/orange.png';
import cyan from '../img/cyan.png';
import red from '../img/red.png';
import purple from '../img/purple.png';

const Carousel = ({ onColorChange, selectedColor }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const colors = [
    { name: 'black', image: black },
    { name: 'white', image: white },
    { name: 'orange', image: orange },
    { name: 'cyan', image: cyan },
    { name: 'red', image: red },
    { name: 'purple', image: purple },
  ];


  const handlePrevClick = () => {
    setVisibleIndex((prevIndex) => (prevIndex === 0 ? colors.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setVisibleIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleColors = () => {
    const visibleCount = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 2;
    return colors.slice(visibleIndex, visibleIndex + visibleCount).concat(
      visibleIndex + visibleCount > colors.length ? colors.slice(0, (visibleIndex + visibleCount) % colors.length) : []
    );
  };

  return (
    <div className="flex md:w-full overflow-auto justify-between items-center">
      <button onClick={handlePrevClick}><Icon icon="fe:arrow-left" /></button>
      {getVisibleColors().map((color, index) => (
        <button key={index} onClick={() => onColorChange(color.name)}>
          <img
            src={color.image}
            alt={color.name}
            className={`product-image ${selectedColor === color.name ? 'border-2 border-black duration-300 ease-linear' : ''}`}
          />
        </button>
      ))}
      <button onClick={handleNextClick}><Icon icon="fe:arrow-right" /></button>
    </div>
  );
};

export default Carousel;

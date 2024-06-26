import React, { useState, useEffect } from 'react';
import black from '../img/black.png'; // Adjust import paths accordingly
import white from '../img/white.png';
import orange from '../img/orange.png';
import cyan from '../img/cyan.png';
import red from '../img/red.png';
import purple from '../img/purple.png';

const PhotoGalleryModal = ({ isOpen, onClose, selectedColor }) => {
  const [photos] = useState([
    black,
    white,
    orange,
    cyan,
    red,
    purple,
  ]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Update currentPhotoIndex whenever selectedColor changes
  useEffect(() => {
    const index = photos.findIndex(photo => photo === selectedColor);
    if (index !== -1) {
      setCurrentPhotoIndex(index);
    }
    // alert(index)
  }, [selectedColor, photos]);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-4/5 max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          className="absolute top-4 right-4 text-gray-800 text-2xl"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <button
          className="absolute top-4 left-4 text-gray-800 text-2xl"
          onClick={handlePrevPhoto}
        >
          &#8249;
        </button>
        <img
          src={photos[currentPhotoIndex]}
          alt={selectedColor}
          className="w-full h-auto max-h-96 object-contain"
        />
        <button
          className="absolute top-4 right-16 text-gray-800 text-2xl"
          onClick={handleNextPhoto}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;

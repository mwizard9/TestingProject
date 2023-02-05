import React, { useState } from "react";

const allImages = [
  "logo192.png",
  "log512.png",
  "logo192.png",
  "log512.png",
  "logo192.png",
  "log512.png",
  "logo192.png",
  "log512.png",
  "logo192.png",
  "log512.png",
];

const RandomImage = () => {
  const [images, setImages] = useState([]);

  const handleImageClick = () => {
    setImages(getRandomImages());
  };

  const getRandomImages = () => {
    const randomIndexes = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * allImages.length)
    );
    return randomIndexes.map(index => allImages[index]);
  };

  return (
    <div>
      {images.map(image => (
        <img
          
          src="logo192.png"
          alt="image"
          onClick={handleImageClick}
        />
        
      ))}
      {images.map(image => (
        <img
         
          src="logo512.png"
          alt="image"
          onClick={handleImageClick}
        />
        
      ))}
    </div>
  );
};

export default RandomImage;

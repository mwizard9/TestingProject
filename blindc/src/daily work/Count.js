import React, { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, url: 'https://picsum.photos/200', count: 0 },
    { id: 2, url: 'https://picsum.photos/200', count: 0 },
    { id: 3, url: 'https://picsum.photos/200', count: 0 },
    { id: 4, url: 'https://picsum.photos/200', count: 0 },
    { id: 5, url: 'https://picsum.photos/200', count: 0 },
    { id: 6, url: 'https://picsum.photos/200', count: 0 },
    { id: 7, url: 'https://picsum.photos/200', count: 0 },
    { id: 8, url: 'https://picsum.photos/200', count: 0 },
    { id: 9, url: 'https://picsum.photos/200', count: 0 },
    { id: 10, url: 'https://picsum.photos/200', count: 0 },
    { id: 11, url: 'https://picsum.photos/200', count: 0 },
    { id: 12, url: 'https://picsum.photos/200', count: 0 },
    { id: 13, url: 'https://picsum.photos/200', count: 0 },
    { id: 14, url: 'https://picsum.photos/200', count: 0 },
    { id: 15, url: 'https://picsum.photos/200', count: 0 },
    { id: 16, url: 'https://picsum.photos/200', count: 0 },
  ]);

  const handleImageClick = (id) => {
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return {
          ...image,
          count: image.count + 1,
        };
      }
      return image;
    });
    setImages(updatedImages);
  };

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.url} alt="gallery" onClick={() => handleImageClick(image.id)} />
            <p>Count: {image.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
];

const Test = () => {
  const [count, setCount] = useState(0);
  const [winIndex, setWinIndex] = useState(null);

  const handleClick = (index) => {
    setCount(count + 1);
    setWinIndex(index);
  };

  return (
    <div>
      <h1>Click on an image</h1>
      <p>Count: {count}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.slice(0, 16).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleClick(index)}
            style={{
              border: `3px solid ${winIndex === index ? 'green' : 'white'}`,
              opacity: winIndex === index ? 1 : 0.5,
              margin: '5px',
              width: '150px',
              height: '150px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
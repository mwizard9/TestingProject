import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState({
    image1: 0,
    image2: 0,
    image3: 0
  });

  const handleClick = (id) => {
    setCount({
      ...count,
      [id]: count[id] + 1
    });
  };

  return (
    <div>
      <img id="image1" src='nighttime.jpeg' style={{ height: '500px', width: '500px' }} onClick={() => handleClick("image1")} />
      <p>{count.image1}</p>
      <img id="image2" src='portait.jpeg' style={{ height: '500px', width: '500px' }} onClick={() => handleClick("image2")} />
      <p>{count.image2}</p>
      <img id="image3" src='daytime.jpeg' style={{ height: '500px', width: '500px' }} onClick={() => handleClick("image3")} />
      <p>{count.image3}</p>
    </div>
  );
};

export default CounterApp;

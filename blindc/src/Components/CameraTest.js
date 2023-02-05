import React, { useState } from "react";

const CameraTest = () => {
  const cameras = [
    {
      id: 1,
      name: "Camera 1",
      image:
        "https://via.placeholder.com/200x200/000000/FFFFFF/?text=Camera+1"
    },
    {
      id: 2,
      name: "Camera 2",
      image:
        "https://via.placeholder.com/200x200/000000/FFFFFF/?text=Camera+2"
    },
    // Add more cameras as needed
  ];

  const [currentCamera, setCurrentCamera] = useState(cameras[0]);

  const handleNextCamera = () => {
    const nextCamera = cameras[Math.floor(Math.random() * cameras.length)];
    setCurrentCamera(nextCamera);
  };

  return (
    <div>
      <h1>Blind Camera Test</h1>
      <p>
        Click the button to switch to the next camera. Try to guess which
        camera is being displayed.
      </p>
      <img src={currentCamera.image} alt={currentCamera.name} />
      <button onClick={handleNextCamera}>Next Camera</button>
      <img src={currentCamera.image} alt={currentCamera.name} />
      <button onClick={handleNextCamera}>Next Camera</button>
    </div>
  );
};

export default CameraTest;

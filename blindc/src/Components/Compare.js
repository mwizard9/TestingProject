import React, { useState } from "react";

const BlindCameraTest = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [devices, setDevices] = useState([
    { name: "Device 1", image: "" },
    { name: "Device 2", image: "" },
    { name: "Device 3", image: "" },
    { name: "Device 4", image: "" }
  ]);

  const handleSelection = deviceName => {
    setSelectedDevice(deviceName);
  };

  return (
    <div>
      <h1>Blind Camera Test</h1>
      {devices.map(device => (
        <div key={device.name}>
          <h2>{device.name}</h2>
          <img src={device.image} alt={device.name} />
          <button onClick={() => handleSelection(device.name)}>
            Select
          </button>
        </div>
      ))}
      {selectedDevice ? (
        <h2>You selected: {selectedDevice}</h2>
      ) : (
        <h2>Please select a device</h2>
      )}
    </div>
  );
};

export default BlindCameraTest;

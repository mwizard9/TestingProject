import React, { useState } from "react";

const ImageVoting = () => {
  const images = [
    {
      id: 1,
      url: "https://via.placeholder.com/200x200/000000/FFFFFF/?text=Image+1"
    },
    {
      id: 2,
      url: "https://via.placeholder.com/200x200/000000/FFFFFF/?text=Image+2"
    }
  ];

  const [votes, setVotes] = useState({ 1: 0, 2: 0 });

  const handleVote = id => {
    setVotes({
      ...votes,
      [id]: votes[id] + 1
    });
  };

  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            onClick={() => handleVote(image.id)}
          />
          <p>Votes: {votes[image.id]}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageVoting;

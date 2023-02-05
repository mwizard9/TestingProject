import React, { useState,useEffect } from "react";

const Elo = ({ player1, player2, result }) => {
  const [player1Rating, setPlayer1Rating] = useState(player1.rating);
  const [player2Rating, setPlayer2Rating] = useState(player2.rating);

  useEffect(() => {
    const expectedScore1 = 1 / (1 + 10 ** ((player2Rating - player1Rating) / 400));
    const expectedScore2 = 1 / (1 + 10 ** ((player1Rating - player2Rating) / 400));
    const k = 32;

    setPlayer1Rating(player1Rating + k * (result - expectedScore1));
    setPlayer2Rating(player2Rating + k * (1 - result - expectedScore2));
  }, [player1, player2, result]);

  return (
    <div>
      <p>
        <h1>player1</h1>
        {player1.name}: {player1Rating}
      </p>
      <p>
        <h1>player2</h1>
        
        {player2.name}: {player2Rating}
      </p>
    </div>
  );
};

export default Elo;

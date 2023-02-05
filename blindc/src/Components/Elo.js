import React, { useState, useEffect } from "react";

const Elo = ({ players, matches }) => {
  const [ratings, setRatings] = useState(players.map(p => p.rating));

  const calculateElo = (ratingA, ratingB, result) => {
    const k = 32;
    const expectedScoreA = 1 / (1 + 10 ** ((ratingB - ratingA) / 400));
    const expectedScoreB = 1 / (1 + 10 ** ((ratingA - ratingB) / 400));
    const newRatingA = ratingA + k * (result - expectedScoreA);
    const newRatingB = ratingB + k * (1 - result - expectedScoreB);
    return [newRatingA, newRatingB];
  };

  useEffect(() => {
    let updatedRatings = [...ratings];
    matches.forEach(match => {
      const [playerA, playerB] = match;
      const indexA = players.findIndex(p => p.name === playerA);
      const indexB = players.findIndex(p => p.name === playerB);
      const [newRatingA, newRatingB] = calculateElo(
        ratings[indexA],
        ratings[indexB],
        match.result
      );
      updatedRatings[indexA] = newRatingA;
      updatedRatings[indexB] = newRatingB;
    });
    setRatings(updatedRatings);
  }, [players, matches, ratings]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{ratings[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Elo;

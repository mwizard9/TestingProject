import React, { useState } from 'react';

function VotingCounter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <img src="your-photo.jpg" alt="Your Photo" />
      <p>Votes: {count}</p>
      <button onClick={() => setCount(count + 1)}>Vote</button>
    </div>
  );
}

export default VotingCounter;

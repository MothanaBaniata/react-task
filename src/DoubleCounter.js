import React, { useState, useEffect } from 'react';

const DoubleCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log({count});
  }, [count]);

  return (
    <div>
      <h1>Counter 1: {count}</h1>
      <h1>Counter 2 (Double): {count * 2}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default DoubleCounter;

import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const throwError = () => {
    throw new Error('Some Custom Error');
  };
  return (
    <div>
      {counter >= 5 && throwError()}
      <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

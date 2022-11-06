export const decrement = () => {
  return {
    type: 'decrement',
    payload: 1,
  };
};

export const increment = () => {
  return {
    type: 'increment',
    payload: 2,
  };
};

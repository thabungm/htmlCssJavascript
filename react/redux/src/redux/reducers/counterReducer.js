const counterReducer = (state = 0, action) => {
  // action = 'increment'
  /* 
        action = {
            type:'increment',
            payload: 5
        } 
    */
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return 0;
    default:
      return state;
  }
};

export default counterReducer;

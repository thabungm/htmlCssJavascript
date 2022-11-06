import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h3>Counter</h3>
      <h2>{counter}</h2>
      <div>
        <button onClick={() => dispatch(increment())}> Inc + </button>
        <button onClick={() => dispatch(decrement())}> Dec - </button>
        <button
          onClick={() =>
            dispatch({
              type: 'reset',
            })
          }
        >
          Reset
        </button>
      </div>
      {auth === true ? (
        <div>Secret revealed :D </div>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: 'LOG_IN',
            })
          }
        >
          Click to see secret
        </button>
      )}
    </div>
  );
}

export default App;

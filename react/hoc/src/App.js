import './App.css';
import CollapseExpand from './hoc/CollapseExpand';
import ViewEditToggle from './hoc/ViewEditToggle';

function App() {
  return (
    <div className='App'>
      <h3>Higher order function</h3>
      <ViewEditToggle />
      <CollapseExpand />
    </div>
  );
}

export default App;

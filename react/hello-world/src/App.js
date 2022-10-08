// 2 types of components
// 1. class component
// 2. functional component
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'good evening', message2: 'Test' };
  }

  render() {
    // jsx
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <h3>{this.state.message2}</h3> */}
        <h3>{this.state.message1}</h3>
        <button
          onClick={() => {
            this.setState({
              message: 'Hello world',
              message1: 'Hi world',
            });
          }}
        >
          Click and change
        </button>
      </div>
    );
  }
}

export default App;

import { Component } from 'react';
class Reverse extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  render() {
    return (
      <>
        <h3>{this.state.message.split('').reverse().join('')}</h3>
        <input
          onChange={(event) => {
            this.setState({ message: event.target.value });
          }}
          value={this.state.message}
        />
      </>
    );
  }
}
export default Reverse;

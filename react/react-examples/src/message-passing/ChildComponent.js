import { Component } from 'react';
import './style.css';
class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='childContainer'>
        <h3>Child component</h3>
        <div>id: {this.props.id}</div>
        <div>Name: {this.props.name}</div>
        <div>UserName: {this.props.username}</div>
      </div>
    );
  }
}

export default ChildComponent;

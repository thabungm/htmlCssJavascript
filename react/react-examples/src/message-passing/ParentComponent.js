import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import './style.css';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.data = {
      id: 1,
      name: 'Adam S',
      username: 'adam',
    };
  }
  render() {
    return (
      <>
        <div className='container'>
          <h3>Parent component</h3>
          <ChildComponent
            id={this.data.id}
            name={this.data.name}
            username={this.data.username}
          />
        </div>
        <div>another</div>
      </>
    );
  }
}

export default ParentComponent;

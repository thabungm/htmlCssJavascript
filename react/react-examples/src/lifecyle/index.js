import { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { someValue: 1 };
    console.log('constructor');
  }
  // create -> created/constructor -> mounted -> updated -> unmounted
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => {
      this.setState({ someValue: 1000 });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return <>lifecycle demo {this.state.someValue}</>;
  }
}

export default LifeCycleDemo;

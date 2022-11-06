import { Component } from 'react';

const WithToggle = (PassedComponent) => {
  class WithToggleClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toggleStatus: false,
      };
    }

    setToggleStatus() {
      this.setState({
        toggleStatus: !this.state.toggleStatus,
      });
    }

    render() {
      return (
        <PassedComponent
          setToggleStatus={() => {
            this.setToggleStatus();
          }}
          toggleStatus={this.state.toggleStatus}
        />
      );
    }
  }

  return WithToggleClass;
};

export default WithToggle;

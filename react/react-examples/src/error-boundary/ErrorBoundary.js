import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  refresh() {
    window.location.reload();
  }
  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <p>{this.state.errorMessage}</p>
          <button onClick={this.refresh}>Click to refresh</button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;

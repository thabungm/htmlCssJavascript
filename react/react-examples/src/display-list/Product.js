import { Component } from 'react';
import './style.css';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='product-details'>
        <div>Product: {this.props.product}</div>
        <div>Quantity: {this.props.quantity}</div>
        <div>Price: {this.props.price}</div>
      </div>
    );
  }
}

export default Product;

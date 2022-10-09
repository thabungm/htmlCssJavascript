import { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        { product: 'Tracing Sheets A3 for Artists', quantity: 1, cost: 4.55 },
        { product: 'Water Colour Pencils', quantity: 1, cost: 2.9 },
        { product: 'Oil Pastels –50 Shades', quantity: 1, cost: 3.0 },
        {
          product: 'Acrylic Colour Set (16 Colours) 50 ML',
          quantity: 1,
          cost: 8.5,
        },
      ],
    };
  }

  renderItems() {
    const items = this.state.cart.map((item) => {
      return (
        <Product
          product={item.product}
          quantity={item.quantity}
          price={item.cost}
        />
      );
    });

    return items;
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default ProductList;

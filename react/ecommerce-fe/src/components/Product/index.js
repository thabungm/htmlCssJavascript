// name, description, imageUrl, price
import './style.css';
const Product = ({ product }) => {
  const { name, description, imageUrl, price } = product;
  return (
    <div className='productContainer'>
      <div>
        <img width='100px' src={imageUrl} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>{price}</div>
    </div>
  );
};

export default Product;

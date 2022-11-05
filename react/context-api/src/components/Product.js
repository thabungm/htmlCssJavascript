import AddCartButton from "./AddCartButton";

const Product = ({ product }) => {
  return (
    <div style={{ border: "3px solid red" }} className="productDetails">
      <img width={"100px"} src={product.imgUrl} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <AddCartButton product={product} />
    </div>
  );
};

export default Product;

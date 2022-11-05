import { useEffect, useState } from "react";
import { getData } from "../getProducts";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div style={{ border: "3px solid blue" }} className="productListContainer">
      {products.length > 0 &&
        products.map((product) => {
          const { id } = product;
          return <Product key={id} product={product} />;
        })}
    </div>
  );
};

export default ProductList;

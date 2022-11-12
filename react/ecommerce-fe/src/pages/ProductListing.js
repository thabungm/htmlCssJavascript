import Product from '../components/Product';

const ProductListing = () => {
  const data = {
    name: 'Apple',
    imageUrl:
      'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
    description: 'Sweet and delicious apple',
    price: 2,
  };
  return (
    <>
      <Product product={data} />
      <Product product={data} />
    </>
  );
};

export default ProductListing;

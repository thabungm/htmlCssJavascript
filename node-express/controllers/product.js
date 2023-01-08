import Product from '../models/Product';

export const create = async (data) => {
  const product = await new Product(data).save();
  // await product.save();
  return product;
};

export const get = async () => {
  const result = await Product.find();
  return result;
};

export const update = async (productId, data) => {
  const result = await Product.findByIdAndUpdate(productId, data);
  return result;
};

export const remove = async (productId) => {
  await Product.findByIdAndDelete(productId);
};

import Product from '../models/Product';

export const create = async (data) => {
  const product = await new Product(data).save();
  // await product.save();
  return product;
};

export const get = async (params) => {
  /*
      {
        keyword: orange,
        sortBy: name,
        sortDir: desc/asc,
        filterBy: Active
      }
      */
  const { keyword, sortBy, sortDir, perPage, pageNumber } = params;

  // const keyword = params.keyword;

  // total: 100 records
  // per page: 5
  // current page number 2, 3
  // how many records skipped? : perPage * (currentPageNumber - 1)
  const skip = perPage * (pageNumber - 1);
  console.log({ skip, perPage });
  const search = new RegExp(keyword, 'i');
  const result = await Product.find({ name: search })
    .sort({ [sortBy]: sortDir }) // sortBy: 'name', sortDir: -1
    .skip(skip)
    .limit(perPage);

  return result;
};

export const update = async (productId, data) => {
  const result = await Product.findByIdAndUpdate(productId, data);
  return result;
};

export const remove = async (productId) => {
  await Product.findByIdAndDelete(productId);
};

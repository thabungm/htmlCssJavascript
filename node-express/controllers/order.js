import orderIdGenerate from 'order-id';

import Order from '../models/Order';
const orderId = orderIdGenerate('RANDOM-KEY');
export const create = async (data) => {
  const order = {};
  order.items = data;
  order.orderId = orderId.generate();
  console.log(order);
  const result = await new Order(data).save();
  return result;
};

export const get = async () => {
  /*

    [2,3,4,5, 6, 7]
    // > 3: 4 ,5 , 6, 7
   
    // 4 even ,5 odd , 6 even, 7 odd
    */
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
  ]);
  return result;
  //   return result;
};

// export const get = async (params) => {

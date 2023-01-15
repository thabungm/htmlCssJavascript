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

// export const get = async (params) => {

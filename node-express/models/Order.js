import mongoose from 'mongoose';
const orderStatus = {
  ORDER_PLACED: 'ORDER_PLACED',
  ORDER_CANCELLED: 'ORDER_CANCELLED',
  ORDER_CLOSED: 'ORDER_FULFILLED',
};

const { Schema } = mongoose;
const fields = {
  orderId: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      quantity: Number,
    },
  ],
  orderStatus: {
    type: String,
    enum: Object.keys(orderStatus),
    default: orderStatus.ORDER_PLACED,
  },
  datePlaced: { type: Date, default: Date.now },
};
const OrderSchema = new Schema(fields, {
  timestamps: true,
});
const Order = mongoose.model('Order', OrderSchema);

export default Order;

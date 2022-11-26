import mongoose from 'mongoose';
const url =
  'mongodb+srv://demo:demo123@cluster0.w3cje.mongodb.net/?retryWrites=true&w=majority';

export const connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('Database is connected');
    })
    .catch((err) => {
      console.log('Database connection failed', err.message);
    });
};

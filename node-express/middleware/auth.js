import jwt from 'jsonwebtoken';
import User from '../models/User';

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { userId } = await verifyToken(token);
    const user = await User.findById(userId);

    if (user) {
      req.user = user;
      return next();
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send({ message: 'You are unauthorized' });
  }
};

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        // check on blacklist
        resolve(decoded);
      }
    });
  });

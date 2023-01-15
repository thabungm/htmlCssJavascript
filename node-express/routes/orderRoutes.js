import { create } from '../controllers/order';
import { auth } from '../middleware/auth';
const orderRoutes = (router) => {
  router.post('/order', auth, async (req, res) => {
    try {
      const { _id: userId } = req.user;
      const data = await create({ ...req.body, userId });
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
};

export default orderRoutes;

import { login } from '../controllers/auth';
const authRoutes = (router) => {
  router.post('/register', async (req, res) => {
    try {
      const body = req.body;
      const user = await register(body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      console.log(req.body);
      const result = await login(req.body);
      return res.json(result);
    } catch (err) {
      console.log(err);
      return res.status(401).json(err.message);
    }
  });
};

export default authRoutes;

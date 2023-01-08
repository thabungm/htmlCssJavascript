import { create, get, update } from '../controllers/product';

/* 
  C: POST X
  R: GET X
  U: PUT X
  D: DELETE 
 */
const productRoutes = (router) => {
  router.post('/products', async (req, res) => {
    try {
      const data = await create(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  router.get('/products', async (req, res) => {
    try {
      const data = await get(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });

  router.put('/products/:productId', async (req, res) => {
    await update(req.params.productId, req.body);
    res.status(200).json('Updated');
  });

  router.put('/products/:productId', async (req, res) => {
    await remove(req.params.productId);
    res.status(200).json('Deleted');
  });
};

export default productRoutes;

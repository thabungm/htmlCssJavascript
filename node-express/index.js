import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({
    message: 'welcome to rest api',
  });
});

app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({ message: 'success' });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

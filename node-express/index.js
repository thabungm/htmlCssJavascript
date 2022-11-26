import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './mongo';
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
connect();

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to ecommerce rest api',
  });
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

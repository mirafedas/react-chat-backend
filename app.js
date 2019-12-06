const express = require('express');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const chatRouter = require('./routes/chatRoutes');

const bodyParser = require('body-parser');
const app = express();

const port = 3030;

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.status(200).send('Server is up and running!');
})

app.listen(port, () => {
  console.log('App is running');
})

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/chats', chatRouter);

module.exports = app;
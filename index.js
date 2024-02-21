require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT|| 3500;
const MONGODB_URL = process.env.MONGO_URL
const Order = require('./model/Order');
const PostCartItem = require('./model/PostCart');
const app = express();
mongoose.connect(MONGODB_URL)
  .then(() => {
     console.log('Database is connected');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
  });
  
app.use(cors())
app.use(express.json())


app.use('/Auth',require('./Route/AuthRouter'))

app.use('/api',require('./Route/OrderRouter'))

app.use("/apis",require('./Route/paymentOrder'));




app.put('/api/orders/:orderId/status', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
      const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
      if (!order) {
          return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
      console.log(order)
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/vieworder/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const userOrders = await Order.find({ userId: userId });
    console.log("View order Backend : ",userOrders)
    res.json(userOrders);
  } catch (error) {
    console.error('Backend Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/cart',async(req,res) =>{
  try {
    const {userId} = req.body;
      const delteCart = await PostCartItem.findByIdAndDelete(userId)
      console.log("Delete backend Success",delteCart)
      res.status(200).json({msg:"deleted successfully",status:true})
  } catch (error) {
    console.log(error)
  }
})

  app.listen(PORT,() =>{
  
    console.log('Server is Running...');
  })

  

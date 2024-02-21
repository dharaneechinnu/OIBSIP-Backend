const Order = require('../model/Order');

const createPizzaOrder = async (req, res) => {
  try {
    const orderData =req.body;
  console.log("backend Order : ",orderData)

    await Order.create(orderData);
     console.log("order pizza :",orderData)
    res.status(200).json({ message: 'Pizza order saved successfully' });
  } catch (error) {
    console.error('Error saving pizza order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = createPizzaOrder;

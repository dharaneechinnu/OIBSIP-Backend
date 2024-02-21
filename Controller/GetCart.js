const Order = require('../model/Order'); 
const Cart = require('../model/PostCart')

/*Getcart */
const GetcartData = async (req, res) => {
    try {
      const userId = req.params.userId;
      console.log("userid:", userId);
      const cartData = await Cart.find({ userId: userId });
      console.log("Get:", cartData);
      res.status(200).json(cartData);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  /*Delete */
  const deleteCartItem = async (req, res) => {
    try {
        const { itemId } = req.params;

       
        await Cart.findByIdAndDelete({_id:itemId});
         console.log("Delelte success")

        res.status(200).json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        
        console.error('Error deleting item from cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
  



/*AddToCrat */
const postcart = async (req,res) =>{
  try{

   const { pizzaName, userId, base, sauce, cheese, veggies, quantity, totalPrice } = req.body;

   const post = {
    pizzaName, userId, base, sauce, cheese, veggies, quantity, totalPrice
   }
   console.log("backend:",post)
    const postCarts = await Cart.create(post)

    console.log("Add To Cart",postCarts)
    res.status(200).json({"message":"Success"})
  }
  catch(error)
  {
    res.status(400).json({error})
  }
}




/* Admin View order */

const GetOrder = async (req, res) => {
    try {
        
        const orderData = await Order.find({});
        console.log(orderData);
       
        res.status(200).json(orderData);
    } catch (error) {

        console.error('Error fetching order data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { GetcartData, GetOrder,postcart,deleteCartItem };

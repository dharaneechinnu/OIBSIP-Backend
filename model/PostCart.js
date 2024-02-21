const mongoose = require('mongoose');

const PostCartItemSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
       required: true 
      },
      pizzaName:{
         type:String
      },
  base: {
     type: String
     },
  sauce: { 
    type: String
    },
  cheese: {
     type: String
     },
  veggies: {
     type: [String],
      default: [] 
    },
  quantity: {
     type: Number,
      required: true
     },
  totalPrice: { 
    type: Number,
     required: true
     },

});

const PostCartItem = mongoose.model('PostCartItem', PostCartItemSchema);

module.exports = PostCartItem;

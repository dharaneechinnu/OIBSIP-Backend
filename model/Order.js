const mongoose = require('mongoose');

const pizzaOrderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  },
  pizzaName:{
    type:String,
    required:true
 },
  base: {
     type: String, 
     required: true
     },
  sauce:{ 
    type: String,
    required: true 
    },
  cheese: {
     type: String,
    required: true 
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
    status: {
      type:String
    }
   
});

const PizzaOrder = mongoose.model('PizzaOrder', pizzaOrderSchema);

module.exports = PizzaOrder;

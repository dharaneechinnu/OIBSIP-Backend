const mongoose = require('mongoose');

const PizzaCartOrigin = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
       required: true 
      },
  title:{
    type:String,
    require:true
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

const pizzaorigin = mongoose.model('pizzaorigin', PizzaCartOrigin);

module.exports = pizzaorigin;

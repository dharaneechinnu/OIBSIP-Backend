const express = require('express');
const router = express.Router();

/*OrderItem*/
router.route('/pizza').post(require('../Controller/OrderPizza'))

/*getCart*/
router.route('/cartData/:userId').get(require('../Controller/GetCart').GetcartData)

/*Delete */
router.route('/cartData/:itemId').delete(require('../Controller/GetCart').deleteCartItem)

/*Addtocart*/
router.route('/postcart').post(require('../Controller/GetCart').postcart)













/*Admin*/
router.route('/order').get(require('../Controller/GetCart').GetOrder)

module.exports = router;

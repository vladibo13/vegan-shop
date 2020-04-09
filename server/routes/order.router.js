const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/order.controllers');

router.get('/t/o', orderController.amountOfOrders);
router.post('/', orderController.createOrder);
// router.get('/', orderController.createReception);

module.exports = router;

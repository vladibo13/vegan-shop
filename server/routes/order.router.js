const { Router } = require('express');
const router = Router();
const orderController = require('../controllers/order.controllers');

router.post('/', orderController.createOrder);

module.exports = router;

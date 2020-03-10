const { Router } = require('express');
const router = Router();
const productController = require('../controllers/product.controllers');

router.get('/', productController.getAllProducts);
router.get('/s', productController.searchProductByCategory);

module.exports = router;

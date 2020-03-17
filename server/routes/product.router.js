const { Router } = require('express');
const router = Router();
const productController = require('../controllers/product.controllers');

router.get('/', productController.getAllProducts);
router.get('/s/c', productController.searchProductByCategory);
router.get('/:search', productController.searchByInput);

module.exports = router;

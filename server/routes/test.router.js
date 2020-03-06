const { Router } = require('express');
const router = Router();
const testController = require('../controllers/test.controllers');

router.get('/category', testController.getAllCategories);
router.post('/category', testController.categoryCreate);
router.post('/product', testController.productCreate);
router.get('/product', testController.getAllProducts);

module.exports = router;

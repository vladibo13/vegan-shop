const { Router } = require('express');
const router = Router();
const categoryController = require('../controllers/category.controllers');

router.get('/', categoryController.getAllCategory);

module.exports = router;

const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth.controllers');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

module.exports = router;

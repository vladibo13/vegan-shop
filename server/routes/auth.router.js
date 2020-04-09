const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth.controllers');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user/:id', authController.getLoggedUser);

module.exports = router;

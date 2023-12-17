const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for user registration
router.post('/register', authController.registerUser);

// POST route for user login
router.post('/login', authController.loginUser);

module.exports = router;

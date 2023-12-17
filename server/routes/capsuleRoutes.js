// routes/capsuleRoutes.js
const express = require('express');
const router = express.Router();
const capsuleController = require('../controllers/capsuleController');

// Define routes
router.post('/create', capsuleController.saveCapsule);

module.exports = router;

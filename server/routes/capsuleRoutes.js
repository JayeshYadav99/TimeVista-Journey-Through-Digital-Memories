// routes/capsuleRoutes.js
const express = require('express');
const router = express.Router();
const capsuleController = require('../controllers/capsuleController');

// Define routes
router.post('/create', capsuleController.saveCapsule);
router.get('/public', capsuleController.getPublicCapsules);
router.get('/:capsuleId', capsuleController.getSingleCapsule);


module.exports = router;

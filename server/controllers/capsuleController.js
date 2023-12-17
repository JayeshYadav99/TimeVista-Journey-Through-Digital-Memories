// controllers/capsuleController.js
const { Capsule } = require('../model/Capsule'); // Assuming your model is in the models directory
const mongoose = require('mongoose');
// Controller function to save a time capsule
exports.saveCapsule = async (req, res) => {
  try {
    // Extract information from the request body
    const { title, description, files, createdBy,user,scope,unveilDate } = req.body;
    // const dummyUserId = new mongoose.Types.ObjectId(); 
    // Create a new Capsule instance
    const newCapsule = new Capsule({
      title:"first memory",
      description,
      files,
      createdBy:user,
      scope,
      unveilingDate:unveilDate
    });

    // Save the capsule to the database
    const savedCapsule = await newCapsule.save();

    // Respond with the saved capsule data
    res.status(201).json(savedCapsule);
  } catch (error) {
    console.error('Error saving capsule:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

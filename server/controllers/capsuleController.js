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
      title,
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
exports.getPublicCapsules = async (req, res) => {
  try {
    // Fetch capsules with a public scope from the database
    const publicCapsules = await Capsule.find({ scope: 'public' }).populate('createdBy');

    // Respond with the array of public capsules
    res.status(200).json(publicCapsules);
  } catch (error) {
    console.error('Error fetching public capsules:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.getSingleCapsule = async (req, res) => {
  try {
    // Extract the capsule ID from the request parameters
    const { capsuleId } = req.params;

    // Validate that the provided ID is a valid ObjectId
    if (!mongoose.isValidObjectId(capsuleId)) {
      return res.status(400).json({ error: 'Invalid capsule ID' });
    }

    // Fetch the capsule from the database based on the ID
    const singleCapsule = await Capsule.findById(capsuleId).populate('createdBy');

    // Check if the capsule with the given ID exists
    if (!singleCapsule) {
      return res.status(404).json({ error: 'Capsule not found' });
    }

    // Respond with the single capsule data
    res.status(200).json(singleCapsule);
  } catch (error) {
    console.error('Error fetching single capsule:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
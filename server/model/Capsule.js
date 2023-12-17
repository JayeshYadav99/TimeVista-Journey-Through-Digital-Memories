
const mongoose = require('mongoose');

// Content schema represents the various types of content within a time capsule
const contentSchema = new mongoose.Schema({

  type: { type: String, required: true }, // e.g., "message", "photo", "video", "audio", "prediction", etc.
  data: { type: String, required: true }, // For text messages or file paths
  // ... other content-related fields as needed
});

// Capsule schema represents a time capsule
const capsuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  files: [contentSchema], // Array of content associated with the capsule
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  scope: { type: String, enum: ['public', 'private'], default: 'public' }, // Added scope field
  unveilingDate: { type: Date }, // Added unveilingDate field
 
  // Add more capsule-related fields as needed
});

// Model for the user collection


// Model for the content collection
const Content = mongoose.model('Content', contentSchema);

// Model for the capsule collection
const Capsule = mongoose.model('Capsule', capsuleSchema);

module.exports = { Content, Capsule };

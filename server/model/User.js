const mongoose = require('mongoose');

// User schema represents information about users
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  timeTravelerID: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // Add more user-related fields as needed
});
const User = mongoose.model('User', userSchema);
module.exports = User;
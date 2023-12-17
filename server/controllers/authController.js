const User = require('../model/User');
const { comparePassword, hashPassword } = require('./../helpers/authHelper');

// Controller function for user registration
exports.registerUser = async (req, res) => {
    try {
      const { name, email, timeTravelerID, password } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await hashPassword(password);
  
      // Create a new user with the hashed password
      const newUser = new User({
        name,
        email,
        timeTravelerID,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Controller function for user login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(password)

    // Check if the email is registered
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials. Please try again.' });
    }
console.log(user)
    // Compare the entered password with the hashed password in the database
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }

    res.status(200).json({ message: 'Login successful!', user });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

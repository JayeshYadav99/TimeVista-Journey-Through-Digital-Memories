// app.js or server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const timeCapsuleController = require('./controllers/timeCapsuleController');
const capsuleRoutes = require('./routes/capsuleRoutes');
const authRoute = require('./routes/authRoute');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (make sure your MongoDB server is running)
mongoose.connect('mongodb+srv://Jazzy49:MyNodeApp@nodeprojects.tsxlcqi.mongodb.net/TimeCapsule?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Route for creating a new time capsule with multimedia content
app.use('/api/timecapsules',capsuleRoutes);
app.use('/api/auth',authRoute);
app.get('/api/timecapsules' , (req,res) => {
    res.send('Hello World');
});
// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

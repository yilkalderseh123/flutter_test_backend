const express = require('express');
const  cors = require('cors'); // allow cross origin requests
const connectDB = require('./db/db');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // middleware to use req.body
// app.use(cors()); // to avoid CORS errors

// CORS Configuration to allow any origin
app.use(cors({
  origin: '*', // allows requests from any origin
  credentials: true, // allows cookies to be sent with requests if needed
  optionsSuccessStatus: 200, // handles legacy browsers
}));

// Routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

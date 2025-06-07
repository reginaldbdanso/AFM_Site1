const express = require('express');
const cors = require('cors');
const jobRoutes = require('./routes/jobs')
const blogRoutes = require('./routes/blog')
const adminRoutes = require('./routes/admin')
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const seedData = require('./utils/seedData');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/admin', adminRoutes);

const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas and start server
const startServer = async () => {
  try {
    await connectDB();
    console.log('DB connection completed')
    
    // Seed data in development environment
    if (process.env.RNODE_ENV === 'development') {
      await seedData();
      console.log('Data seeded successfully')
    }
    
    app.listen(PORT, () => {
      console.log(`Server running in ${process.env.RNODE_ENV || 'development'} mode on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
  }
};

startServer();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://reggiedee:MongoNafetiti14@tcluster0.lkavasg.mongodb.net/recruitment?retryWrites=true&w=majority&appName=TCluster0')
//   .then(() => console.log('Connected to MongoDB'))
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.error('MongoDB connection error:', error));

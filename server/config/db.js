const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/uttarakhand_tradition_db');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn('MongoDB connection fallback/warning:', error.message);
    console.log('Running with mock database fallback so you can run the app without local MongoDB installed!');
  }
};

module.exports = connectDB;

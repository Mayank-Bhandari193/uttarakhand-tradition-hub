const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'Jagar' },
  duration: { type: String, default: '5:30' },
  views: { type: String, default: '1.2K' },
  likes: { type: String, default: '500' },
  comments: { type: String, default: '329' },
  thumbnail: { type: String, required: true },
  videoUrl: { type: String, default: 'https://www.youtube.com/@pushpabhandari6645' }
}, { timestamps: true });

module.exports = mongoose.models.Video || mongoose.model('Video', videoSchema);

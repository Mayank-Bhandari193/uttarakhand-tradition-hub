const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

const fallbackVideos = [
  {
    _id: '1',
    title: 'नंदा देवी राजजात जागर (Nanda Devi Rajjaat Jagar)',
    category: 'Jagar',
    duration: '6:26',
    views: '1.8K',
    likes: '15K',
    comments: '329',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: '2',
    title: 'गढ़वाली मंगल गीत (Garhwali Mangal Geet)',
    category: 'Mangal Geet',
    duration: '5:28',
    views: '1.2K',
    likes: '33',
    comments: '379',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80'
  },
  {
    _id: '3',
    title: 'कुमाऊँनी होली व बैठकी (Kumaoni Traditional Holi)',
    category: 'Holi',
    duration: '5:29',
    views: '1.8K',
    likes: '12K',
    comments: '376',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80'
  }
];

router.get('/', async (req, res) => {
  try {
    let videos = await Video.find();
    if (!videos || videos.length === 0) {
      return res.json(fallbackVideos);
    }
    res.json(videos);
  } catch (err) {
    // If mongo is not running locally, seamlessly return sample data
    res.json(fallbackVideos);
  }
});

module.exports = router;

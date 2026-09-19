const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({
    name: 'Pushpa Bhandari',
    channelHandle: '@pushpabhandari6645',
    subscribers: '34K',
    views: '154.38K',
    recentComments: 160,
    newFollowers: 169,
    streakDays: 15,
    pahadiPoints: 3450,
    festivals: [
      { name: 'Ghee Sakrand', daysLeft: '15 Days' },
      { name: 'Harela', daysLeft: '15 Days' },
      { name: 'Holi', daysLeft: '15 Days' }
    ]
  });
});

module.exports = router;

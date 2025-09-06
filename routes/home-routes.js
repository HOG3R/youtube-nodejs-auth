const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();
const path = require('path');


// router.get('/homepage',authMiddleware, (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/homePage.html"));
// });
  
router.get('/welcome', authMiddleware ,(req, res) => {
  const { username, userId, role } = req.userInfo;

  res.json({
    message: 'Welcome to the home page',
    user: {
      _id: userId,
      username,
      role
    }
  });
});

module.exports = router;
const express = require('express');
const { loginUser, registerUser, changePassword } = require('../controllers/auth-controllers');
const router = express.Router();
const path = require("path");
const authMiddleware = require('../middleware/auth-middleware');



//all routes are related to authentication & authorization
// router.get("/register", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/register.html"));
// });
// router.get("/login", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/change-password', authMiddleware, changePassword);

module.exports = router;

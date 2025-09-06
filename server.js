require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');
const cors = require("cors");
const uploadImagesRoutes = require('./routes/image-routes');

connectToDB();


const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/image', uploadImagesRoutes)
app.use(cors({ origin: "http://127.0.0.1:5500" }));


app.listen(PORT, () => {
  console.log(`Server is now listening to PORT ${PORT}`);
});
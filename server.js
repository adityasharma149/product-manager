const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://aditya4by4:aditya4by4@cluster0.lrhzfxq.mongodb.net/')
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

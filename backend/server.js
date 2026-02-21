const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const connectDB = require('./config/db.js');
const contactRoutes = require('./routes/contactRoutes.js');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Security Middlewares
app.use(cors());
app.use(helmet());
app.use(xss());

// Routes
app.use('/api/contact', contactRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Load environment variables
require('dotenv').config();

// Core packages
const express = require('express');
const cors = require('cors');

//Route files
const userRoutes = require('./routes/userRoutes');
const matchmakingRoutes = require('./routes/matchmakingRoutes');
const verifyRoutes = require('./routes/verifyRoutes');
const rankRoutes = require('./routes/rankRoutes');
// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/matchmaking', matchmakingRoutes);
app.use('/api/verify-phone', verifyRoutes);
app.use('/api/rank', rankRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

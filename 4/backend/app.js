const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');
const organizationRoutes = require('./routes/organization');

const app = express();

// Allow cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Use user and organization routes
app.use('/users', userRoutes);
app.use('/organizations', organizationRoutes);

module.exports = app;

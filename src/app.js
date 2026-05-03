const express = require('express');
const app = express();

const applicationRoutes = require('./routes/applicationRoutes');

app.use(express.json());

app.use('/applications', applicationRoutes);

module.exports = app;
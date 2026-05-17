const express = require('express');
const app = express();

const applicationRoutes = require('./routes/applicationRoutes');
const authRoutes=require('./routes/authRoutes');

app.use(express.json());

app.use('/applications', applicationRoutes);
app.use('/auth',authRoutes);
console.log("AUTH ROUTES LOADED");
module.exports = app;
const express = require('express');
// Import Index Router
const indexRouter = require('./routes/indexRouter.js');

// Initialize the express app
const app = express();

// Add Routes
app.use('/', indexRouter);

// Start Listening for requests
app.listen(8080, '0.0.0.0', ()=> {
    console.log('SERVER is listening on port 8080...');
});
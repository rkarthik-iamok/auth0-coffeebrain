const express = require('express');
const path = require('path');
// Import Index Router
const indexRouter = require('./routes/indexRouter.js');

// Initialize the express app
const app = express();

// Set the static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Set the views
app.set('views', 'views');
app.set('view engine', 'ejs');

// Add Routes
app.use('/', indexRouter);

// Start Listening for requests
app.listen(8080, '0.0.0.0', ()=> {
    console.log('SERVER is listening on port 8080...');
});
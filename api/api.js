// Error Message 
var error_msg = require('./error');

// Routes
const storesRoute = require('./routes/stores');
const suppliersRoute = require('./routes/suppliers');

// Express module
const express = require('express');
const app = express();

// Example route
app.get('/', (req, res) => {
    res.redirect("http://api.aesltd.co/welcome.html");

});


//Insert routes
app.use('/stores', storesRoute);
app.use('/suppliers', suppliersRoute);

//Listen
app.listen(3000, () => console.log('Listening on port 3000...'));
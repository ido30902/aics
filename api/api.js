// Error Message 
var error_msg = require('./error');

// Routes
const storesRoute = require('./routes/stores');
const suppliersRoute = require('./routes/suppliers');

// Express module
const express = require('express');
const app = express();

/* Extra modules */
//Body Parser
const bodyParser = require('body-parser');

// Example route
app.get('/', (req, res) => {

    //Auth check  => Todo - add it
    if (true) {
        res.send(req.params.id);
    } else {
        res.send(error_msg.invalidTokenMessage());
    }
});


//Insert routes
app.use('/stores', storesRoute);
app.use('/suppliers', suppliersRoute);

//Listen
app.listen(3000, () => console.log('Listening on port 3000...'));
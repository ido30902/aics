var error_msg = require('./error');
const storesRoute = require('./routes/stores');


const express = require('express');
const app = express();

// Example route
app.get('/store:id', (req, res) => {

    //Auth check  => Todo - add it
    if (true) {
        res.send(req.params.id);
    } else {
        res.send(error_msg.invalidTokenMessage());
    }
});


//Insert routes
app.use('/stores', storesRoute);

//Listen
app.listen(3000, () => console.log('Listening on port 3000...'));
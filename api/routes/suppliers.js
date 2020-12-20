const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const { json } = require('body-parser');
const MongoClient = require('mongoose');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json);

router.get('', (req, res) => {

});

router.post('/new', (req, res) => {
    console.log("new supplier has signed up");
});

module.exports = router;
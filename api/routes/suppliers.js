const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json);

router.get('', (req, res) => {

});

router.post('/new', (req, res) => {






});

module.exports = router;
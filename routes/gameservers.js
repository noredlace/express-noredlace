const express = require('express');
router = express.Router();


var dummyServer = require('../config/gameservers/gameservers.json')

// Define the home page route
router.get('/', function (req, res) {
    res.send(dummyServer);
});

module.exports = router;
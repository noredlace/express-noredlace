const express = require('express');
router = express.Router();

// Define the home page route
router.get('/', function (req, res) {
    var dummyServerData = new Object();                       
    var dummyServerArray = [];
    
    dummyServerData.Game = "Test";
    dummyServerData.Name = "Test";
    dummyServerData.SavedFileURL = "Test";
    dummyServerData.Address = "Test";
    dummyServerData.Port = "Test";
    dummyServerData.Description = "Test";
    dummyServerData.IsOnline = "Test";
    dummyServerData.Version = "Test";

    dummyServerArray.push(dummyServerData);

    res.send(dummyServerArray);
});

module.exports = router;
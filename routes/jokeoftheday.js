const express = require('express');
router = express.Router();
const fetch = require("node-fetch");

// Define the home page route
router.get('/', async function (req, res) {
    try {
        const api_url = 'https://api.jokes.one/jod';
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        res.json(json);
    } catch (error) {
        res.json('{"Error": "' + error + '"}');
    }
});

module.exports = router;


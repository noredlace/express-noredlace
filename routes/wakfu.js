const express = require('express');
router = express.Router();

var recipeFilePath = require('../config/wakfu/recipes.json')

// Define the home page route
router.get('/', function (req, res) {
    res.send('Add /recipes');
});

// Define /api/wakfu/recipes
router.get('/recipes', function (req, res) {
    try {
        res.json(recipeFilePath);
    } catch (error) {
        res.json('{"Error": "' + error + '"}');
    }

})

module.exports = router;


const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', (req, res) =>  {
    res.send('hello');
});


// Add Posts

// Delete Posts


module.exports = router;
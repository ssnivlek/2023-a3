// import dependencies and initialize the express router
const express = require('express');
const {index} = require('../useCases/exampleManagement/exampleController');
const router = express.Router();

// define routes
router.get('/add', index);

module.exports = router;
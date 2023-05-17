// import dependencies and initialize the express router
const express = require('express');
const {index} = require('../useCases/exampleManagement/exampleController');
const {addDocController} = require('../useCases/addManagement/addController');
const {getAllDocsController} = require('../useCases/getAllManager/getAllController');
const router = express.Router();

// define routes
router.post('/add', addDocController);
router.get('/allDocs', getAllDocsController);


module.exports = router;
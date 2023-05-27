// import dependencies and initialize the express router
const express = require("express");
const { addDocController } = require("../useCases/addManagement/addController");
const { getAllDocsController } = require("../useCases/getAllManager/getAllController");
const { getDocController } = require("../useCases/getDocManager/getDocController");
const { updateDocController } = require("../useCases/updateDocManager/updateDocController");
const { deleteDocController } = require("../useCases/deteleteDocManager/deleteDocController");
const router = express.Router();

// define routes
router.post("/add", addDocController);
router.get("/allDocs", getAllDocsController);
router.get("/get/:id", getDocController);
router.put("/update/:id", updateDocController);
router.delete("/delete/:id", deleteDocController);

module.exports = router;

const { createCloudantClient, updateDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function updateDocController(req, res) {
  let document = req.body;
  let docId = req.params.id;

  const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
  const updateDocId = await updateDoc(client, process.env.CLOUDANT_DATABASE, docId, document);

  let response = {
    updated: updateDocId,
    id: docId,
    newDoc: document,
  };

  res.send(response);
}

module.exports = {
  updateDocController,
};

const { get } = require("http");
const { createCloudantClient, getDoc, deleteDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function deleteDocController(req, res) {
  let docId = req.params.id;

  const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);

  const revision = await getDoc(client, process.env.CLOUDANT_DATABASE, docId);
  let rev = revision._rev;

  const deleteDocId = await deleteDoc(client, process.env.CLOUDANT_DATABASE, docId, rev);

  res.send(deleteDocId);
}

module.exports = {
  deleteDocController,
};

const { get } = require("http");
const { createCloudantClient, getDoc, deleteDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function deleteDocController(req, res) {
  let docId = req.params.id;

  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);

    const revision = await getDoc(client, process.env.CLOUDANT_DATABASE, docId);
    let rev = revision._rev;

    const deleteDocId = await deleteDoc(client, process.env.CLOUDANT_DATABASE, docId, rev);

    let response = { deleted: deleteDocId.ok, doc: { id: deleteDocId.id, rev: deleteDocId.rev } };
    res.send(response);
  } catch (err) {
    let response = { deleted: false, error: err };
    res.send(response);
  }
}

module.exports = {
  deleteDocController,
};

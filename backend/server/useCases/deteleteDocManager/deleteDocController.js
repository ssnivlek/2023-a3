const {createCloudantClient, deleteDoc} = require("../../common/cloudant.js");
require('dotenv').config();

async function deleteDocController(req, res) {

  const client = createCloudantClient(process.env.CLOUDANT_APIKEY,process.env.CLOUDANT_URL);
  const deleteDocId = await deleteDoc(client, process.env.CLOUDANT_DATABASE, docId, revision)

  let response = deleteDocId.map((item) => {return item.doc})
  res.send(response);
}

module.exports = {
  deleteDocController,
};
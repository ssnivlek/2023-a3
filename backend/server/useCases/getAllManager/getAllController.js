const { createCloudantClient, getAllDocs, getDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function getAllDocsController(req, res) {
  const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
  const getAll = await getAllDocs(client, process.env.CLOUDANT_DATABASE);

  let response = getAll.map((item) => {
    return item.doc;
  });

  res.send(response);
}

module.exports = {
  getAllDocsController,
};

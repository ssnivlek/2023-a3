const { createCloudantClient, getDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function getDocController(req, res) {
  let docId = req.params.id;
  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
    const getDocId = await getDoc(client, process.env.CLOUDANT_DATABASE, docId);

    res.send(getDocId);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  getDocController,
};

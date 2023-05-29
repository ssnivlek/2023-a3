const { createCloudantClient, getAllDocs, getDoc } = require("../../common/cloudant.js");
require("dotenv").config();

async function getAllDocsController(req, res) {
  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
    const getAll = await getAllDocs(client, process.env.CLOUDANT_DATABASE);

    let response = getAll.map((item) => {
      return item.doc;
    });

    if (response.length <= 0) {
      response = { docs: response, error: "docsNull" };
    }

    res.send(response);
  } catch (err) {
    res.send(err);
  }
}

module.exports = {
  getAllDocsController,
};

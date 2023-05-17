const {createCloudantClient, createDbAndDoc} = require('../../common/cloudant.js');
const {generateDocId} = require("../../helpers/helpers.js");
require('dotenv').config();

async function addDocController(req, res) {
  let document = req.body
  let docId = generateDocId(document.nome_produto);

  const client = createCloudantClient(process.env.CLOUDANT_APIKEY,process.env.CLOUDANT_URL);
  const add = await createDbAndDoc(client, process.env.CLOUDANT_DATABASE, docId, document)

  res.send(add);
}

module.exports = {
  addDocController,
};
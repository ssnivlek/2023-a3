const {createCloudantClient, getDoc} = require('../../common/cloudant.js');
require('dotenv').config();

async function getDocController(req, res) {
  const client = createCloudantClient(process.env.CLOUDANT_APIKEY,process.env.CLOUDANT_URL);
  const getDocId = await getDoc(client, process.env.CLOUDANT_DATABASE, docId)

    let response = getDocId.map((item) => {return item.doc})

  res.send(response);
}

module.exports = {
  getDocController,
};
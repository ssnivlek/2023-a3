const {createCloudantClient, updateDoc} = require('../../common/cloudant.js');
require('dotenv').config();

async function updateDocController(req, res) {
  
  let document = req.body

  const client = createCloudantClient(process.env.CLOUDANT_APIKEY,process.env.CLOUDANT_URL);
  const updateDocId = await updateDoc(client, process.env.CLOUDANT_DATABASE, docId, document)

    let response = updateDocId.map((item) => {return item.doc})

  res.send(response);
}

module.exports = {
  updateDocController,
};
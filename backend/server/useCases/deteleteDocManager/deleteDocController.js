const { createCloudantClient, getDoc, deleteDoc } = require("../../common/cloudant.js");
const { sendMail } = require("../../helpers/helpers.js");
require("dotenv").config();

async function deleteDocController(req, res) {
  let docId = req.params.id;

  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);

    const revision = await getDoc(client, process.env.CLOUDANT_DATABASE, docId);
    let rev = revision._rev;

    const deleteDocId = await deleteDoc(client, process.env.CLOUDANT_DATABASE, docId, rev);

    let response = { deleted: deleteDocId.ok, doc: { id: deleteDocId.id, rev: deleteDocId.rev } };

    try {
      let recipientEmail = revision.email_responsavel;
      let subject = "Alutools - Tool Deleted Notification";
      let html = `<h2>Tool Deleted</h2><p>A new tool has been deleted from the Alutools application.</p><h3>Tool Details:</h3><ul><li><strong>Tool Name:</strong>${revision.nome_produto}</li><li><strong>Owner:</strong>${revision.email_responsavel}</li><li><strong>Tool Description:</strong>${revision.funcao}</li></ul>`;
      let emailResponse = await sendMail(recipientEmail, subject, html);
      response.emailSended = { sended: true, response: emailResponse };
    } catch (err) {
      response.emailSended = { sended: false, response: err };
    }

    res.send(response);
  } catch (err) {
    let response = { deleted: false, error: err };
    res.send(response);
  }
}

module.exports = {
  deleteDocController,
};

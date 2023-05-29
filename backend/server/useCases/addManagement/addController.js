const { createCloudantClient, createDbAndDoc } = require("../../common/cloudant.js");
const { generateDocId, sendMail } = require("../../helpers/helpers.js");
require("dotenv").config();

async function addDocController(req, res) {
  let document = req.body;
  let docId = generateDocId(document.nome_produto);

  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
    const addDocument = await createDbAndDoc(
      client,
      process.env.CLOUDANT_DATABASE,
      docId,
      document
    );

    let response = { added: addDocument, doc: document };

    try {
      let recipientEmail = document.email_responsavel;
      let subject = "Alutools - Tool Added Notification";
      let html = `<h2>New Tool Added</h2><p>A new tool has been added to the Alutools application.</p><h3>Tool Details:</h3><ul><li><strong>Tool Name:</strong>${document.nome_produto}</li><li><strong>Owner:</strong>${document.email_responsavel}</li><li><strong>Tool Description:</strong>${document.funcao}</li></ul>`;
      let emailResponse = await sendMail(recipientEmail, subject, html);
      response.emailSended = { sended: true, response: emailResponse };
    } catch (err) {
      response.emailSended = { sended: false, response: err };
    }

    res.send(response);
  } catch (err) {
    let response = { added: false, error: err };
    res.send(response);
  }
}

module.exports = {
  addDocController,
};

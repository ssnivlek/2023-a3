const { createCloudantClient, updateDoc } = require("../../common/cloudant.js");
const { sendMail } = require("../../helpers/helpers.js");
require("dotenv").config();

async function updateDocController(req, res) {
  let document = req.body;
  let docId = req.params.id;

  try {
    const client = createCloudantClient(process.env.CLOUDANT_APIKEY, process.env.CLOUDANT_URL);
    const updateDocId = await updateDoc(client, process.env.CLOUDANT_DATABASE, docId, document);

    let response = {
      updated: updateDocId,
      id: docId,
      newDoc: document,
    };

    if (document.email_alugado && document.alocado == true) {
      try {
        let hirerEmail = document.email_alugado;
        let ownerEmail = document.email_responsavel;
        let subject = "Alutools - Tool Notification";
        let html = `<p>A notification regarding your tool in the Alutools application:</p> <h3>Tool Details:</h3> <ul> <li><strong>Tool Name:</strong>${document.nome_produto}</li><li><strong>Function:</strong>${document.funcao}</li> <li><strong>Rental Period:</strong>${document.periodo}</li> <li><strong>Price:</strong>${document.preco}</li> <li><strong>Hirer Email:</strong>${document.email_alugado}</li><li><strong>Renter Email:</strong>${document.email_responsavel}</li></ul>`;
        let emailResponseHirer = await sendMail(hirerEmail, subject, html);
        let emailResponseOwner = await sendMail(ownerEmail, subject, html);
        response.emailSended = { sended: true, response: [emailResponseHirer, emailResponseOwner] };
      } catch (err) {
        response.emailSended = { sended: false, response: err };
      }
    }

    res.send(response);
  } catch (err) {
    let response = {
      updated: false,
      err,
    };
    res.send(response);
  }
}

module.exports = {
  updateDocController,
};

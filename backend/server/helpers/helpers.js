const sgMail = require("@sendgrid/mail");
require("dotenv").config();

function generateDocId(nomeProduto) {
  console.log(nomeProduto);

  return nomeProduto.replace(/ /g, "");
}

function sendMail(subject, html) {
  sgMail.setApiKey(process.env.SENDGRID_APIKEY);

  const msg = {
    to: recipientEmail.split(","),
    from: process.env.SENDGRID_SENDER,
    subject: subject,
    text: html.replaceAll(/<(.|\n)*?>/gi, ""),
    html: html,
  };

  return new Promise(async (resolve, reject) => {
    try {
      const res = sgMail.send(msg);
      const resObj = { response: await res, messageSended: msg };
      console.log(JSON.stringify(resObj, null, 2));
      resolve(resObj);
    } catch (err) {
      const errObj = { error: await err, messageNotSended: msg };
      console.log(JSON.stringify(errObj, null, 2));
      reject(errObj);
    }
  });
}

module.exports = { generateDocId, sendMail };

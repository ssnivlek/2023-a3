const {} = require("../../helpers/helpers.js");

async function index(req, res) {
  let body = req.body
  //example of how to use global socket
  global.io.emit("", "");

  res.send("Test");
}

module.exports = {
  index,
};
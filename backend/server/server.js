// import dependencies and initialize express
const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const router = require("./routes/router");

const app = express();
app.use(cors())
const server = http.createServer(app);

// enable parsing of http request body
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// routes and api calls
app.use("/", router);

// ignore this
// default path to serve up index.html (single page application)
app.use(express.static(path.join(__dirname, "../public", "index.html")));
app.use("", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public", "index.html"));
});

// start node server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

// error handler for unmatched routes or api calls
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = app;

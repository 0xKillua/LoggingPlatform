const express = require("express");
const routes = express.Router();
const { textController } = require("../controller/textController");

routes.post("/post-data", textController.logData);
routes.get("/get-data/:author", textController.readAuthor);
module.exports = routes;

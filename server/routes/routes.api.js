const express = require("express");
const routes = express.Router();

const { textController } = require("../controller/textController");

routes.post("/post-data", textController.logData);
routes.post("/register", textController.register);
routes.get("/get-data/:author", textController.readAuthor);
routes.post("/login");
module.exports = routes;

const express = require("express");
const routes = express.Router();

const { textController } = require("../controller/textController");
const { loginController } = require("../controller/login.controller");

routes.post("/post-data", textController.logData);
routes.post("/register", textController.register);
routes.get("/get-data/:author", textController.readAuthor);
routes.post("/login", loginController.verify);
module.exports = routes;

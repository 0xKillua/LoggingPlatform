const express = require("express");
const routes = express.Router();
const passport = require("passport");
require("../config/jwt");

const { textController } = require("../controller/textController");
const { loginController } = require("../controller/login.controller");

routes.post("/register", textController.register);
routes.get(
  "/get-profile/:id",
  passport.authenticate("jwt", { session: false }),
  textController.readProfile
);
routes.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  textController.createPost
);
routes.get("/forum", textController.fetchPost);
routes.get("/test/:id", textController.readProfile);
routes.post("/login", loginController.verify);
module.exports = routes;

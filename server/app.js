const express = require("express");
const app = express();
const db = require("./mongodb.js");
const cors = require("cors");
const passport = require("passport");
require("./config/jwt");

db(); // start server;
const apiRoutes = require("./routes/routes.api");
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

app.use("/api", apiRoutes);
app.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.status(200).json({ authenticated: true, id: req.user.id });
  }
);
app.listen(3003);

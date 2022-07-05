const express = require("express");
const app = express();
const db = require("./mongodb.js");
const crypto = require("crypto");
const passport = require("passport");
const cors = require("cors");

db(); // start server;
const apiRoutes = require("./routes/routes.api");
app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);
app.listen(3003);

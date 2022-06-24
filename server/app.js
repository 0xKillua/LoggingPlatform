const express = require("express");
const app = express();
const db = require("./mongodb.js");

db(); // start server;
const apiRoutes = require("./routes/routes.api");
app.use(express.json());
app.get("/", (res, req) => {
  req.send("<h1>This is main Page</h>");
});

app.use("/api", apiRoutes);
app.listen(3000);

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config("./env");
const startServer = async () => {
  try {
    console.log(process.env.MONG_URI);
    await mongoose.connect(process.env.MONG_URI);
    console.log("Success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = startServer;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config("./env");
const startServer = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URI);
    console.log(conn.connection);
  } catch (err) {
    console.log(err);
  }
};

startServer();

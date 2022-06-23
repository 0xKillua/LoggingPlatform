const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { table, saveData } = require("./model/data.model.js");
dotenv.config("./env");
const startServer = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG_URI);
    await saveData();
    // console.log(conn.connection);
    // const data = new table({
    //   author: "Peter",
    //   text: "First try",
    // });
    // await data.save();
    console.log("success");
    const x = await table.findById("62b349cb63c502095e68b68a", "author text");
    console.log(x);
  } catch (err) {
    console.log(err);
  }
};

startServer();

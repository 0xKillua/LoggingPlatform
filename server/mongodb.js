const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config("./env");
const startServer = async () => {
  try {
    console.log(process.env.MONG_URI);
    await mongoose.connect(process.env.MONG_URI);
    console.log("Success");
    // const data = new table({
    //   author: "Peter",
    //   text: "Secong try",
    // });
    // await data.save();
    // console.log("success");
    // const x = await table.findById("62b349cb63c502095e68b68a", "author text");
    // console.log(x);
  } catch (err) {
    console.log(err);
  }
};

module.exports = startServer;

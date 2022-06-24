const mongoose = require("mongoose");
const hktNow = require("../controller/date.controller.js");
const startServer = require("../mongodb.js");
const dataModel = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },

  text: {
    type: String,
    require: true,
  },

  timeSubmitted: {
    type: Date,
    default: hktNow(),
  },
});

const textSchema = mongoose.model("textSchema", dataModel);

// const saveData = async () => {
//   const data = new textSchema({
//     author: "Peter",
//     text: "Second try",
//   });

//   await data.save();
//   console.log(data);
// };
// saveData();

module.exports = textSchema;
// module.exports = mongoose.model("textSchema", dataModel);

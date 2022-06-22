const mongoose = require("mongoose");

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
    default: Date.now(),
  },
});

module.exports = mongoose.model("textSchema", dataModel);

const mongoose = require("mongoose");
const moment = require("moment");
// const hktNow = require("../controller/date.controller.js");
const dataModel = new mongoose.Schema({
  author: {
    type: String,
    require: true,
  },

  topic: {
    type: String,
    require: true,
  },

  text: {
    type: String,
    require: true,
  },

  timeSubmitted: {
    type: Date,
    default: moment(),
  },
});

const postSchema = mongoose.model("postSchema", dataModel);

module.exports = postSchema;

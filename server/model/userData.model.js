const mongoose = require("mongoose");
const hktNow = require("../controller/date.controller.js");
const userDataModel = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  emailAddress: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },
  timeSubmitted: {
    type: Date,
    default: hktNow(),
  },
});

const userDataSchema = mongoose.model("userDataSchema", userDataModel);

module.exports = userDataSchema;

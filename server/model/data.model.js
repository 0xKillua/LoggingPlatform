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

const table = mongoose.model("textSchema", dataModel);

const saveData = async () => {
  const data = new table({
    author: "Peter",
    text: "First try",
  });

  await data.save();
};

module.exports = { table, saveData };
// module.exports = mongoose.model("textSchema", dataModel);

const express = require("express");
const textSchema = require("../model/data.model.js");

const textController = {
  logData: async (req, res) => {
    const { author, text } = req.body;
    console.log(req.body);
    console.log(author);
    try {
      const data = textSchema.create({ author, text });
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },

  readAuthor: async (res, req) => {
    try {
      const data = await textSchema.findOne(
        { author: res.params.author },
        "text"
      );
      data != null || undefined ? req.send(data) : req.send("no such author"); //serve corresponding json file
    } catch (err) {}
  },
};
module.exports = { textController };

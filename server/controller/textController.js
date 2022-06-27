const textSchema = require("../model/data.model.js");
const { logger } = require("../provider/logging.provider");
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
      const data = await textSchema.find({ author: res.params.author });
      if (data != null || undefined) {
        req.send(data);
        logger.info(`Requested by ${res.params.author} :  ${data}`);
      } else {
        req.send("no such author");
      } //serve corresponding json file
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = { textController };

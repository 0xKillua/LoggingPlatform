const textSchema = require("../model/data.model.js");
const userDataSchema = require("../model/userData.model");
const bcrypt = require("bcrypt");
const { logger } = require("../provider/logging.provider");
const textController = {
  register: async (req, res) => {
    let { firstName, lastName, emailAddress, password, timeSubmitted } =
      req.body;
    try {
      let emailCount = await userDataSchema.countDocuments({ emailAddress });
      if (emailCount > 0) {
        //Signed up already
        res.status(200).send("already registered");
      } else {
        password = await bcrypt.hash(password, 10);
        const userData = await userDataSchema.create({
          firstName,
          lastName,
          emailAddress,
          password,
          timeSubmitted,
        });
        logger.info(`New account created by ${firstName + lastName}`);
        res.status(200).send("success");
      }
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },

  logData: async (req, res) => {
    const { author, text } = req.body;
    try {
      const data = textSchema.create({ author, text });
      res.status(200).json(req.body);
      f;
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },

  readAuthor: async (req, res) => {
    try {
      const data = await textSchema.find({ author: res.params.author });
      if (data != null || undefined) {
        res.send(data);
        logger.info(`Requested by ${res.params.author} :  ${data}`);
      } else {
        res.send("no such author");
      } //serve corresponding json file
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = { textController };

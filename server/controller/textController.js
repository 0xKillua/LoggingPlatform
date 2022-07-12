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
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },

  readProfile: async (req, res) => {
    try {
      userDataSchema.findOne(
        { _id: req.params.id },
        "-_id firstName lastName emailAddress",
        (err, results) => {
          if (err) {
            return res.status(200).send({
              status: false,
              message: "Cannot find this user",
            });
          }
          return res.status(200).send(results);
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = { textController };

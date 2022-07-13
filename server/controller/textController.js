const postSchema = require("../model/post.model.js");
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

  createPost: async (req, res) => {
    const { author, topic, text } = req.body;
    try {
      userDataSchema.findOne({ _id: author }, (err, _) => {
        if (err) {
          return res
            .status(400)
            .send({ status: "Error", message: "Cannot find this user!" });
        }
      });
      const postData = await postSchema.create({ author, topic, text });
      logger.info(`New Post Created by id ${author}`);
      return res.status(200).send({ status: "success", ...postData });
    } catch (err) {
      return res.status(400).send({ err: err.message });
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

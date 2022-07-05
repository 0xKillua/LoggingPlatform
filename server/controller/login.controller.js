const userDataSchema = require("../model/userData.model");
const passport = require("passport");
const localStrategy = require("passport-local");
const bcrypt = require("bcrypt");

const loginController = {
  verify: async (req, res) => {
    try {
      let { emailAddress, password } = req.body;
      const userDbPassword = await userDataSchema.findOne(
        { emailAddress },
        "password"
      );
      //if pw = null
      if (!userDbPassword) {
        res.status(200).json({ result: false });
      } else {
        const result = await bcrypt.compare(password, userDbPassword.password);
        res.status(200).json({ result: result });
      }
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  },
};

module.exports = { loginController };

const userDataSchema = require("../model/userData.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginController = {
  verify: async (req, res) => {
    try {
      let { emailAddress, password } = req.body;
      const userDetails = await userDataSchema.findOne({ emailAddress });
      if (!userDetails) {
        return res.status(200).json({ result: false });
      }

      const userId = userDetails._id.toString();

      const result = await bcrypt.compare(password, userDetails.password);
      if (result) {
        const token = jwt.sign(
          { id: userId, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          "secret message"
        );

        return res.status(200).json({
          result: true,
          token: "Bearer " + token,
          message: "Log in successfully",
        });
      } else {
        return res.status(400).json({
          result: false,
          message: "Incorrect Username or Password  ",
        });
      }

      //if pw = null
      //   if (!userDbPassword) {
      //     res.status(200).json({ result: false });
      //   } else {
      //     const result = await bcrypt.compare(password, userDbPassword.password);
      //     res.status(200).json({ result: result });
      //   }
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },
};

module.exports = { loginController };

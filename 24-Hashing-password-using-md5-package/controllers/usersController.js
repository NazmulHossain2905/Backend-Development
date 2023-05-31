const Users = require("../models/usersModel");
const md5 = require("md5");

exports.registerNewUser = async (req, res) => {
  try {
    const { email, password } = req?.body;
    const newUser = new Users({
      email: email,
      password: md5(password),
    });
    const user = await newUser.save();

    if (user) {
      return res.status(201).json({
        success: true,
        message: "User create successfully",
        user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not created!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req?.body;
    const user = await Users.findOne({ email });

    if (user && user.password === md5(password)) {
      return res.status(200).json({
        success: true,
        message: "User login successfully",
        user,
        //   user: {
        //     _id: user._id,
        //     email: user.email,
        //   },
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "You are not a valid user. Please register first!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

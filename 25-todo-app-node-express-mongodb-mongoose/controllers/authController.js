const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/userModel");

exports.registerNewUser = async (req, res) => {
  try {
    const { name, username, password } = req?.body;
    const newUser = new User({
      name,
      username,
      password,
    });
    const user = await newUser.save();

    if (user) {
      return res.status(201).json({
        success: true,
        message: "User create successfully!",
        user: {
          name: user.name,
          username: user.username,
          createdAt: user.createdAt,
        },
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not created!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: {
        name: error?.errors?.name?.message || "",
        username: error?.errors?.username?.message || "",
        password: error?.errors?.password?.message || "",
      },
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req?.body;

    const user = await User.findOne({ username }).select({
      username: 1,
      password: 1,
      _id: 0,
    });

    if (user && password === user.password) {
      return res.status(200).json({
        success: true,
        message: "User login successfully!",
        // user: {
        //   name: user.name,
        //   username: user.username,
        //   createdAt: user.createdAt,
        // },
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: {
        username: error?.errors?.username?.message || "",
        password: error?.errors?.password?.message || "",
      },
    });
  }
};

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.find().select({
      password: 0,
    });

    return res.status(200).json({
      success: true,
      message: "All users",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
};

exports.findOneUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    // const users = await User.find({$or: [{_id: {$eq: id}}, {username: {$eq: username}}]})
    const user = await User.find({ _id: id }, { password: 0 });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "User found successfully!",
        user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
};

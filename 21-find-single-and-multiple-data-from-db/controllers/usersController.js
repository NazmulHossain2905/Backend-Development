const Users = require("../models/usersModel");

exports.createNewUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req?.body;
    const newUser = new Users({
      name,
      email,
      phone,
      password,
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

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find().select({ password: 0 });

    return res.status(200).json({
      success: true,
      total: users.length,
      users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getSingleUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const user = await Users.findById({ _id: id }, { password: 0 });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "User found successfully!",
        user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const { name, email, phone, password } = req?.body;
    const user = await Users.findByIdAndUpdate(
      { _id: id },
      { $set: { name, email, phone, password } }
    );

    if (user) {
      return res.status(200).json({
        success: true,
        message: "User update successfully!",
        // user,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User not exist!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const user = await Users.findOneAndDelete({ _id: id });

    if (user) {
      return res.status(200).json({
        success: true,
        message: "User delete successfully!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "User not exist!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

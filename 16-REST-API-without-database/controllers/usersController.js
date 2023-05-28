const { v4: uuid } = require("uuid");
let users = require("../models/usersModel");

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    total: users.length,
    users,
  });
};

// Create new user
const createNewUser = (req, res) => {
  const { username, email, phone } = req.body;

  if (!username) {
    return res.status(401).json({
      success: false,
      message: "Please provide username",
    });
  } else if (!email) {
    return res.status(401).json({
      success: false,
      message: "Please provide email",
    });
  } else if (!phone) {
    return res.status(401).json({
      success: false,
      message: "Please provide phone number",
    });
  } else {
    const newUser = {
      id: uuid(),
      username,
      email,
      phone,
    };

    users.push(newUser);

    res.status(201).json({
      success: true,
      message: "User create successfully",
      users,
    });
  }
};

// Update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email, phone } = req.body;

  const findUser = users.filter((user) => user.id === userId);
  findUser[0].username = username || findUser[0].username;
  findUser[0].email = email || findUser[0].email;
  findUser[0].phone = phone || findUser[0].phone;

  res.status(200).json({
    success: true,
    message: "User update successfully",
    user: findUser,
  });
};

// Delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;

  const findUser = users.filter((user) => user.id === userId);
  if (findUser.length) {
    users = users.filter((user) => user.id !== userId);

    return res.status(200).json({
      success: true,
      message: "User delete successfully",
    });
  } else {
    return res.status(404).json({
      success: false,
      message: "User not found!!",
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};

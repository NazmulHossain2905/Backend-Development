const path = require("path");
const users = require("../models/usersModel");

const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    totalUser: users.length,
    users,
  });
};

const getUserForm = (req, res) => {
  res.status(200).sendFile(path.resolve("views/users.html"));
};

const createNewUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = {
    username,
    email,
  };
  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User create successfully",
    users,
    totalUser: users.length,
  });
};

module.exports = {
  getAllUsers,
  getUserForm,
  createNewUser,
};

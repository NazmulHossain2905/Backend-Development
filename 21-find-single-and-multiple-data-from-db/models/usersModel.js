const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name."],
    },
    email: {
      type: String,
      required: [true, "Please provide your email."],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number."],
    },
    password: {
      type: String,
      required: [true, "Please provide a new password."],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

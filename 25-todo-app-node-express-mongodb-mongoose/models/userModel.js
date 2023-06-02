const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      trim: true,
      maxLength: [25, "Your name must be less than 25 characters!"],
      minLength: [3, "Your name must be more than 3 characters!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
      trim: true,
      lowercase: true,
      unique: true,
      maxLength: [25, "Username must be less than 25 characters!"],
      minLength: [6, "Username must be more than 6 characters!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      trim: true,
      minLength: [6, "Password must be more than 6 characters!"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      validate: {
        validator: (value) => {
          const emailValidationRegex =
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          return emailValidationRegex.test(value);
        },
        message: ({ value }) => `${value} is not a valid email address!`,
      },
      required: [true, "Please provide your email."],
    },
    password: {
      type: String,
      trim: true,
      minLength: [8, "Your password must have 8 characters!"],
      required: [true, "Please provide a new password."],
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

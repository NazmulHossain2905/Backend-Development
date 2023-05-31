const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: [
        25,
        "Your name is too long! Your name have been maximum 15 characters",
      ],
      minLength: [
        3,
        "Your name is too short! Your name have been minimum 3 characters",
      ],
      required: [true, "Please provide your name."],
    },
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
    phone: {
      type: String,
      unique: true,
      // custom validator below
      validate: {
        validator: (value) => {
          const BDPhoneNoValidationRegex =
            /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
          return BDPhoneNoValidationRegex.test(value);
        },
        message: ({ value }) => `${value} is not a valid phone number!`,
      },
      required: [true, "Please provide your phone number."],
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

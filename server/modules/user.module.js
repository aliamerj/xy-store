const mongoose = require("mongoose");
const { isEmail, isStrongPassword } = require("validator/validator");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 2,
      maxlength: 10,
      required: true,
    },
    lastName: {
      type: String,
      minlength: 2,
      maxlength: 10,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
      sparse: true,
      minlength: 5,
      validate: [isEmail, "invalid email"],
    },
    password: {
      type: String,
      required: true,
      validator: [isStrongPassword, "week password , try agin"],
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      minlength: 5,
      maxlength: 50,
    },
    address2: {
      type: String,
      minlength: 5,
      maxlength: 50,
    },
    zip: {
      type: Number,
      minlength: 5,
      maxlength: 50,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "1h" }
  );
  return token;
};
module.exports = mongoose.model("User", UserSchema);
module.exports.models = {
  connection: "mongodb",
  migrate: "safe",
};

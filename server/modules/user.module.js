const mongoose = require("mongoose");
const { isEmail, isStrongPassword } = require("validator/validator");
const jwt = require("jsonwebtoken");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
      sparse: true,
      minlength: 5,
      maxlength: 20,
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
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
UserSchema.methods.generateAuthToken = () =>
  jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "1d" }
  );
module.exports = mongoose.model("User", UserSchema);
module.exports.models = {
  connection: "mongodb",
  migrate: "safe",
};

const Joi = require("joi");
const mongoose = require("mongoose");
const { isEmail, isStrongPassword } = require("validator/validator");

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

const validateUser = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};

exports.validateUser = validateUser;
exports.User = mongoose.model("User", UserSchema);

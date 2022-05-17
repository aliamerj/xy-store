const _ = require("lodash");
const User = require("../../modules/user.module");
const hashPasswordsUtils = require("../../utils/hashPasswords.utils");
const setAuthTokenUtils = require("../../utils/setAuthToken.utils");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let userInfo = _.pick(req.body, ["username", "email", "password"]);
  let newUser = new User(userInfo);
  await hashPasswordsUtils(newUser);
  await newUser.save();
  setAuthTokenUtils(newUser, res);
  res.status(201).json("successfully registered");
};

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => bcrypt.compare(req.body.password, user.password))
    .then((validPassword) => {
      if (validPassword) return res.status(200).json("login successed");
      else {
        throw error();
      }
    })
    .catch(() => res.status(400).json("Email or password was incorrect."));
};

exports.register = register;
exports.login = login;

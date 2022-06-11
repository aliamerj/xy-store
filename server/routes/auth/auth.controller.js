const _ = require("lodash");
const User = require("../../modules/user.module");
const hashPasswordsUtils = require("../../utils/hashPasswords.utils");
const setAuthTokenUtils = require("../../utils/setAuthToken.utils");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  let userInfo = _.pick(req.body, [
    "firstName",
    "lastName",
    "email",
    "password",
    "country",
    "city",
    "address1",
    "address2",
    "zip",
  ]);
  let newUser = new User(userInfo);
  await hashPasswordsUtils(newUser);
  await newUser.save();
  setAuthTokenUtils(newUser, res);
  res.status(201).json("successfully registered");
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validPassword) {
      setAuthTokenUtils(user, res);
      return res.status(200).json("login successed");
    }
  } catch (error) {
    return res.status(400).json("Incorrect Email or password .");
  }
};

exports.register = register;
exports.login = login;

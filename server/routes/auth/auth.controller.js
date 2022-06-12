const _ = require("lodash");
const User = require("../../modules/user.module");
const hashPasswordsUtils = require("../../utils/hashPasswords.utils");
const { setAuthAccessToken } = require("../../utils/setAuthToken.utils");
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
  setAuthAccessToken(newUser, res);
  newUser.refreshToken.push(newUser.generateRefreshToken());
  await newUser.save();
  res.status(201).json(newUser);
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validPassword) {
      setAuthAccessToken(user, res);
      user.refreshToken.push(user.generateRefreshToken());

      return res.status(200).json("login successed");
    }
  } catch (error) {
    return res.status(400).json("Incorrect Email or password .");
  }
};

const refrechToken = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.generateAuthToken();
  user.refreshToken.push(user.generateRefreshToken());
  return res.sendStatus(200);
};
const signout = (req, res) => {
  User.findOneAndDelete({ refreshToken: req.body.refreshToken[0] })
    .then(() => res.status(200).json("Sign Out successfully"))
    .catch((error) => res.status(404).json(error.message));

  return res.status(204).json("log out successfully");
};
module.exports = {
  login,
  register,
  refrechToken,
  signout,
};

const _ = require("lodash");
const User = require("../../modules/user.module");
const hashPasswordsUtils = require("../../utils/hashPasswords.utils");
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
  const accessToken = newUser.generateAuthToken();
  const refToken = newUser.generateRefreshToken();
  newUser.refreshToken.push(refToken);
  await newUser.save();
  return res
    .status(201)
    .cookie("auth", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 60 * 1000 * 10, // 10m
    })
    .cookie("checkToken", true, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
      maxAge: 60 * 1000 * 10,
    })
    .json({ email: newUser.email, refreshToken: refToken });
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validPassword) {
      const accessToken = user.generateAuthToken();
      const refToken = user.generateRefreshToken();
      user.refreshToken.push(refToken);
      return res
        .status(200)
        .cookie("auth", accessToken, {
          httpOnly: true,
          sameSite: "None",
          secure: true,
          maxAge: 60 * 1000 * 10,
        })
        .cookie("checkToken", true, {
          signed: true,
          sameSite: "None",
          maxAge: 60 * 1000 * 10,
        })
        .json({ email: user.email, refreshToken: refToken });
    }
  } catch (error) {
    return res.status(400).json("Incorrect Email or password .");
  }
};

const refreshToken = async (req, res) => {
  const user = await User.findById(req.user._id);
  const accessToken = user.generateAuthToken();
  const refToken = user.generateRefreshToken();
  user.refreshToken.push(refToken);
  return res
    .status(200)
    .cookie("auth", accessToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 60 * 1000 * 10,
    })
    .cookie("checkToken", true, {
      sameSite: "None",
      secure: true,
      maxAge: 60 * 1000 * 10,
    })
    .json({ email: user.email, refreshToken: refToken });
};
const signout = async (req, res) => {
  await User.findByIdAndUpdate(req.user._id, {
    refreshToken: [],
  });
  return res
    .status(200)
    .cookie("auth", "out", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 1000,
    })
    .cookie("checkToken", false, {
      httpOnly: false,
      sameSite: "None",
      secure: true,
      maxAge: 1000,
    })
    .json("Sign Out successfully");
};
module.exports = {
  login,
  register,
  refreshToken,
  signout,
};

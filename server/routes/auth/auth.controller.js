const _ = require("lodash");
const bycrypt = require("bcrypt");
const User = require("../../modules/user.module");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  let userInfo = _.pick(req.body, ["username", "email", "password"]);
  let newUser = new User(userInfo);

  bycrypt
    .genSalt(10)
    .then((salt) => bycrypt.hash(newUser.password, salt))
    .then((password) => (newUser.password = password))
    .then(() => newUser.save())
    .then(() => newUser.generateAuthToken())
    .then((token) => res.header("x-auth-token", token))
    .then(() => res.status(201).send("success"))
    .catch((error) => res.status(500).send(error.message));
};

const login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => bycrypt.compare(req.body.password, user.password))
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

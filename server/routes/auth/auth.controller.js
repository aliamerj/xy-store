const _ = require("lodash");
const bycrypt = require("bcrypt");
const { validateRegister, validateLogin } = require("../../modules/validaters");
const User = require("../../modules/user.module");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);
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
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).json(error.details[0].message);
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

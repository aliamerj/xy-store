const _ = require("lodash");
const bycrypt = require("bcrypt");
const {User, validateUser} = require("../../modules/user.module");

const register = async (req, res) => {
  const { error } = validateUser(req.body)
  if (error) return res.status(400).send(error.details[0].message);
  let userInfo = _.pick(req.body, ["username", "email", "password"]);
  let newUser = new User(userInfo);
  const salt = await bycrypt.genSalt(10);
  newUser.password = await bycrypt.hash(newUser.password, salt);
  try {
    await newUser.save();
    res.status(201).send('success');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = register;

const { validateRegister } = require("../../modules/validaters");
const User = require("../../modules/user.module");
const bycrypt = require("bcrypt");

const getUsers = (req, res) => {
  res.send("user here !!");
};

const changeInfo = (req, res) => {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  bycrypt
    .genSalt(10)
    .then((salt) => bycrypt.hash(req.body.password, salt))
    .then((passwordHashed) =>
      User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email,
        password: passwordHashed,
      })
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json(err.message))
    )
    .catch((error) => res.status(400).send(error.message));
};

module.exports = { getUsers, changeInfo };

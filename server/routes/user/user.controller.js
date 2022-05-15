const { validateRegister } = require("../../modules/validaters");
const User = require("../../modules/user.module");
const bycrypt = require("bcrypt");

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then(({ username, email }) =>
      res.status(200).json({ username: username, email: email })
    )
    .catch((err) => res.status(404).json(err.message));
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
        .catch((err) => res.status(404).json(err.message))
    )
    .catch((error) => res.status(500).send(error.message));
};

module.exports = { getUser, changeInfo };

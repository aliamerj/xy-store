const bcrypt = require("bcrypt");
module.exports = hashPasswords = async (newUser) => {
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
};

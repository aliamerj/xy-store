module.exports = setAuthToken = (user, response) => {
  const token = user.generateAuthToken();
  response.header("x-auth-token", token);
};

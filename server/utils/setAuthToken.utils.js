const setAuthAccessToken = (user, response) => {
  const accessToken = user.generateAuthToken();
  response.cookie("auth", accessToken, {
    httpOnly: true,
    signed: true,
    sameSite: "None",
    secure: true,
    maxAge: 10 * 1000,
  });
};

module.exports = {
  setAuthAccessToken,
};

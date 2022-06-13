const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeder = req.cookies.auth;

  if (!authHeder) return res.status(401).json("you are not authenticated!!");

  jwt.verify(authHeder, process.env.JWT_PRIVATE_KEY, (error, user) => {
    if (error) res.status(403).json("invalid token");
    req.user = user;
    next();
  });
};
const authRefreshToken = (req, res, next) => {
  const refershToken = req.body.refreshToken;
  if (!refershToken) return res.status(401).json("you are not authenticated!");

  jwt.verify(refershToken, process.env.JWT_REFRESH_KEY, (error, user) => {
    if (error) res.status(403).json(error);
    req.user = user;
    next();
  });
};

module.exports = {
  auth,
  authRefreshToken,
};

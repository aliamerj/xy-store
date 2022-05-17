module.exports = errorMiddleware = (err, req, res, next) => {
  res.status(500).json("Sorry, something went wrong. please try agan later.");
};

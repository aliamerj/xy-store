module.exports = errorMiddleware = (err, req, res, next) => {
  if (err.code === 11000) {
    res
      .status(400)
      .json("The email address is already associated with another Account");
  }
  res.status(500).json(`Sorry, something went wrong. please try agan later. `);
};

const validatorMiddleware = (validate) => {
  return (req, res, next) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).json(error.message);
    else {
      next();
    }
  };
};

module.exports = validatorMiddleware;

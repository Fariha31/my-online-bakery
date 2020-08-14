const { validateCat } = require("../models/Category");
function validateCategory(req, res, next) {
  let { error } = validateCat(req.body);

  if (error) {
    const firstError = error.details[0].message;
    console.log(firstError);
    return res.status(400).json({
      errorMessage: firstError,
    });
  }
  next();
}
module.exports.validateCategory = validateCategory;

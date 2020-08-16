const { validationOrder } = require("../models/Order");
function validateOrder(req, res, next) {
  let { error } = validationOrder(req.body);

  if (error) {
    const firstError = error.details[0].message;
    console.log(firstError);
    return res.status(400).json({
      errorMessage: firstError,
    });
  }
  next();
}
module.exports.validateOrder = validateOrder;

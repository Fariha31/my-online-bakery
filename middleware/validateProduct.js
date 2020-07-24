const { validateProd } = require("../models/Products");
function validateProduct(req, res, next) {
  let { error } = validateProd(req.body);

  if (error) {
    const firstError = error.details[0].message;
    console.log(firstError);
    return res.status(400).send(firstError);
  }
  next();
}
module.exports.validateProducts = validateProduct;

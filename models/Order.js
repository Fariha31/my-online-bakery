var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var orderSchema = mongoose.Schema({
  Fname: String,
  Lname: String,
  Email: String,
  Address: String,
  Country: String,
  productsOrdered: [String],
  totalPrice: Number,
});

var Order = mongoose.model("orders", orderSchema);

function validation(data) {
  const schema = Joi.object({
    Fname: Joi.string().alphanum().min(3).max(15).required(),
    Lname: Joi.string().alphanum().min(3).max(15).required(),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }),
    Address: Joi.string().min(10).max(100).required(),
    Country: Joi.string().alphanum().min(3).max(50).required(),
    productsOrdered: Joi.required(),
    totalPrice: Joi.number().required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Order = Order;
module.exports.validationOrder = validation;

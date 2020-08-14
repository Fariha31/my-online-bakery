const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const ProductSchema = mongoose.Schema({
  title: String,
  price: Number,
  body: String,
  photo: String,
  proCategory: String,
});
const Products = mongoose.model("Products", ProductSchema);

function validateProduct(data) {
  const schema = Joi.object({
    title: Joi.string().required().min(10),
    body: Joi.string().min(10).required(),
    price: Joi.number().min(2000).max(15000).required(),
    photo: Joi.required(),
    proCategory: Joi.required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Products = Products;
module.exports.validateProd = validateProduct;

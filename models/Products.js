const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const Joi = require("@hapi/joi");
const ProductSchema = mongoose.Schema({
  title: String,
  price: Number,
  body: String,
  photo: String,
});
const Products = mongoose.model("Products", ProductSchema);

function validateProduct(data) {
  const schema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().min(10).required(),
    price: Joi.number().default(0).min(2).required(),
    photo: Joi.required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Products = Products;
module.exports.validateProd = validateProduct;

const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const CategorySchema = mongoose.Schema({
  category: String,
  photo: String,
});
const Category = mongoose.model("Category", CategorySchema);

function validateCategory(data) {
  const schema = Joi.object({
    category: Joi.string().required().min(4),
    photo: Joi.required(),
  });
  return schema.validate(data, { abortEarly: false });
}

module.exports.Category = Category;
module.exports.validateCat = validateCategory;

const express = require("express");
const { Category } = require("../models/Category");
const router = express.Router();
const { validateCategory } = require("../middleware/validateCategory");
router.get("/getCategory", async (req, res) => {
  const category = await Category.find();
  return res.send(category);
});

router.get("/getCategory/:id", async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category)
      return res.status(400).send("Category with given ID is not present");
    return res.send(category);
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
router.post("/addCategory", validateCategory, async (req, res) => {
  const { category, photo } = req.body;
  try {
    const nameAlready = await Category.findOne({ category });
    if (nameAlready) {
      return res.status(400).json({
        errorMessage: "Category Already Exists",
      });
    }
    const newCategory = new Category();
    newCategory.category = category;
    newCategory.photo = photo;
    await newCategory.save();
    return res.status(200).json({
      successMessage: "Category is successfully added",
    });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Category not added",
    });
  }
});
router.delete("/deleteCategory/:id", async (req, res) => {
  try {
    let category = await Category.findByIdAndDelete(req.params.id);
    return res.send(category);
  } catch (err) {
    console.log(err);
  }
});

router.put("/updateCategory/:id", validateCategory, async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    category.category = req.body.category;
    category.photo = req.body.photo;
    await category.save();
    return res.status(200).json({
      successMessage: "Category is successfully Updated",
    });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Category not updated",
    });
  }
});
module.exports = router;

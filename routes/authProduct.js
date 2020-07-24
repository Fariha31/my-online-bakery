const express = require("express");
const { Products } = require("../models/Products");
const router = express.Router();
const { validateProducts } = require("../middleware/validateProduct");
router.get("/getProduct", async (req, res) => {
  const product = await Products.find();

  return res.send(product);
});
router.post("/addProduct", validateProducts, async (req, res) => {
  try {
    const product = new Products();
    product.title = req.body.title;
    product.body = req.body.body;
    product.price = req.body.price;
    product.photo = req.body.photo;
    await product.save();
    return res.status(200).send("Successfully added");
  } catch (error) {
    console.log(error);
    return res.status(400).send("Sorry not  added");
  }
});
module.exports = router;

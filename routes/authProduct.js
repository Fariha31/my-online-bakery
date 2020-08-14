const express = require("express");
const { Products } = require("../models/Products");
const router = express.Router();
const { validateProducts } = require("../middleware/validateProduct");
router.get("/getProduct", async (req, res) => {
  const product = await Products.find();
  return res.status(200).send(product);
});
router.get("/getProduct/:id", async (req, res) => {
  try {
    let product = await Products.findById(req.params.id);
    if (!product)
      return res.status(400).json({
        errorMessage: "Product with given ID is not Present",
      });
    return res.send(product);
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Invalid ID",
    });
  }
});
router.post("/user", async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  const product = await Products.find(findArgs)
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit);
  return res.status(200).send({ total: product.length, product });
});
router.post("/addProduct", validateProducts, async (req, res) => {
  try {
    const product = new Products();
    product.title = req.body.title;
    product.body = req.body.body;
    product.price = req.body.price;
    product.photo = req.body.photo;
    product.proCategory = req.body.proCategory;
    await product.save();
    return res.status(200).json({
      successMessage: "Product is successfully added",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      errorMessage: "Product not added",
    });
  }
});
router.delete("/deleteProduct/:id", async (req, res) => {
  try {
    let product = await Products.findByIdAndDelete(req.params.id);
    return res.send(product);
  } catch (err) {
    console.log(err);
  }
});

router.put("/updateProduct/:id", validateProducts, async (req, res) => {
  try {
    let product = await Products.findById(req.params.id);
    product.title = req.body.title;
    product.body = req.body.body;
    product.price = req.body.price;
    product.photo = req.body.photo;
    product.proCategory = req.body.proCategory;
    await product.save();
    return res.status(200).json({
      successMessage: "Product is successfully Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      errorMessage: "Product not updated",
    });
  }
});
module.exports = router;

//let page = Number(req.query.page ? req.query.page : 1);
//let perPage = Number(req.query.perPage ? req.query.perPage : 10);
// let skipRecords = perPage * (page - 1);
//let products = await Product.find().skip(skipRecords).limit(perPage);

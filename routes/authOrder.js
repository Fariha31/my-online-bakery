const express = require("express");
const router = express.Router();
const { Order } = require("../models/Order");
const { validateOrder } = require("../middleware/validateOrder");
router.get("/", async (req, res) => {
  try {
    let productDb = await Order.find();
    if (!productDb) return res.status(200).send("empty");
    return res.status(200).send(productDb);
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Product not added",
    });
  }
});

router.post("/", validateOrder, async (req, res) => {
  try {
    let order = new Order();
    order.Fname = req.body.Fname;
    order.Lname = req.body.Lname;
    order.Email = req.body.Email;
    order.Address = req.body.Address;
    order.Country = req.body.Country;
    order.productsOrdered = req.body.productsOrdered;
    order.totalPrice = req.body.totalPrice;
    await order.save();
    return res.status(200).json({
      successMessage: "Order Added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      errorMessage: "Order not added",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let orderId = await Order.findByIdAndDelete(req.params.id);
    if (!orderId)
      return res.status(400).json({
        errorMessage: "Order against this ID not exists",
      });
    return res.status(200).json({
      successMessage: "Order removed successfully",
    });
  } catch (err) {
    return res.status(400).json({
      errorMessage: "Invalid ID",
    });
  }
});

module.exports = router;

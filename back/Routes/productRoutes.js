const express = require("express");
const router = express.Router();
const multerMid = require("../Middlewares/multerMid.js");

const productController = require("../Controllers/productController.js");

router.get("/products", productController.getProduct);

router.get("/product/:id", productController.getProductById);

router.post("/product", productController.addProduct);

router.patch("/product/:id", productController.updateProduct);

router.delete("/product/:id", productController.deleteProduct);

module.exports = router;

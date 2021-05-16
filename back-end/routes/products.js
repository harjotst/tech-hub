import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.json(product);
  } catch (error) {
    throw new Error(error.message);
  }
});

export default router;

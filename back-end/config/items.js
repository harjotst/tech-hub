import Product from "../models/product.js";
import User from "../models/user.js";
import products from "../data/products.js";
import users from "../data/users.js";
import dotenv from "dotenv";
import connectDatabase from "./database.js";

dotenv.config();
connectDatabase();

const addProducts = async function () {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    await Product.insertMany(products);
    await User.insertMany(users);
  } catch (error) {
    console.error(`Could not delete or insert items!`);
  }
};

const removeProducts = async function () {
  try {
    await Product.deleteMany();
    await User.deleteMany();
  } catch (error) {
    console.log(`Could not delete items!`);
  }
};

if (process.argv[2]) {
  removeProducts();
} else {
  addProducts();
}

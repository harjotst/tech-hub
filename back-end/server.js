import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./config/database.js";
import productRoutes from "./routes/products.js";

if (dotenv.config()) {
  const app = express();

  app.use(cors());
  app.use("/api/products", productRoutes);

  const { PORT, MONGO_URI } = process.env;

  connectDatabase(MONGO_URI);
  app.listen(PORT, console.log(`Listening on port: ${PORT}`));
}

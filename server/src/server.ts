import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import itemRoutes from "./routes/item";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

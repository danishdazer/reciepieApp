import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { recipeRouter } from "./routes/Recipes.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);
dotenv.config();
const mongodbURI = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.listen(3001, () => {
  console.log("server started");
});

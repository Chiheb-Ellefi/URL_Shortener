import "express-async-errors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/database/connect.js";
import { router } from "./src/routes/user.router.js";
import { errorHandlingMiddleware } from "./src/middlewares/errorHandlingMiddleware.js";
dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});
app.use("/", router);
app.use(errorHandlingMiddleware);

const start = () => {
  connectDB();
  app.listen(
    process.env.PORT,
    console.log(`Server listening on port ${process.env.PORT}`)
  );
};

start();

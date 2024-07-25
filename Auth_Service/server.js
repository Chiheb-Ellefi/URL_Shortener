import "express-async-errors";
import express from "express";
import { connectDB } from "./config/database/connect.js";
import User from "./src/models/user.model.js";
import { router } from "./src/routes/user.router.js";
import { errorHandlingMiddleware } from "./src/middlewares/errorHandlingMiddleware.js";
const app = express();
app.use(express.json());

app.use("/", router);
app.use(errorHandlingMiddleware);

const start = () => {
  connectDB();
  app.listen(
    process.env.PORT,
    console.log(`Server listening on port ${process.env.AUT_PORT}`)
  );
};

start();

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { authenticate } from "./config/database/connect.js";
import "express-async-errors";
import router from "./src/routes/url.router.js";
import ErrorHandlingMiddleware from "./src/middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use("/", router);
app.use(ErrorHandlingMiddleware);
const port = process.env.port || 5000;
const start = async () => {
  app.listen(port, console.log(`Listening on port ${port}`));
  await authenticate();
};
start();

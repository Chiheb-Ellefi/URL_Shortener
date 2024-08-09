import express from "express";
import "express-async-errors";
import { client } from "./config/database/redis_client";
import { incrementClick } from "./src/services/queue.consumer";

const app = express();
const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, async () => {
    await client.SUBSCRIBE("clicks", incrementClick);
    console.log(`Listening on port ${port}`);
  });
  await authenticate();
};
start();

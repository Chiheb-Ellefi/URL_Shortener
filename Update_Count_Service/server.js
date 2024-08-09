import express from "express";
import "express-async-errors";
import { client } from "./config/database/redis_client.js";
import { incrementClick } from "./src/services/queue.consumer.js";
import { authenticate } from "./config/database/connect.js";
const app = express();
const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, async () => {
    await client.SUBSCRIBE("clicks", async (hash) => {
      await incrementClick(hash);
    });
    console.log(`Listening on port ${port}`);
  });
  await authenticate();
};
start();

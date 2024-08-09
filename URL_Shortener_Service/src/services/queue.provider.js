import { client } from "../../config/database/redis_client.js";

export const updateDatabaseClicks = async (hash) => {
  await client.PUBLISH("clicks", hash);
};

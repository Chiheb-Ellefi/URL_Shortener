import { createClient } from "redis";

export const client = createClient({
  username: process.env.REDIS_STACK_USERNAME,
  password: process.env.REDIS_STACK_PASSWORD,
  socket: {
    host: process.env.REDIS_STACK_HOST,
    port: process.env.REDIS_STACK_PORT,
  },
});

client.on("error", (err) => console.log(err));
if (!client.isOpen) {
  client.connect();
}

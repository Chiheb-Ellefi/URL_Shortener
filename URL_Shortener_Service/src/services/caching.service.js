import { client } from "../../config/database/redis_client.js";
import { NotFoundError } from "../../config/errors/customErrors.js";
import { findUrl } from "./url.service.js";

export const cacheAside = async (hash) => {
  let url = await client.get(hash);
  if (!url) {
    const response = await findUrl({ hash });
    if (!response) {
      throw new NotFoundError("The url can't be found.");
    }
    url = response.dataValues.url;
    await client.set(hash, url);
  }
  return url;
};

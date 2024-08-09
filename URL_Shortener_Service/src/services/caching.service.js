import { client } from "../../config/database/redis_client.js";
import { NotFoundError } from "../../config/errors/customErrors.js";

import { findUrl } from "./url.service.js";

export const cacheAside = async ({ hash }) => {
  let url = await client.get(hash);
  let longUrl = url && JSON.parse(url);
  if (!url) {
    const response = await findUrl({ hash });
    if (!response) {
      throw new NotFoundError("The url can't be found.");
    }
    longUrl = response.dataValues;
  }
  const newUrl = { ...longUrl, click: parseInt(longUrl.click) + 1 };
  await client.set(hash, JSON.stringify(newUrl));
  return newUrl;
};
export const deleteFromCache = async ({ hash }) => {
  await client.DEL(hash);
};

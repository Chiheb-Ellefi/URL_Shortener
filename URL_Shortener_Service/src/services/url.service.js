import URL from "../models/url.model.js";
import { deleteFromCache } from "./caching.service.js";

export const createUrl = async (details) => {
  return await URL.create(details);
};
export const findUrl = async (details) => {
  return await URL.findOne({ where: details });
};
export const destroyUrl = async (details) => {
  await deleteFromCache(details);
  await URL.destroy({ where: details });
};

import URL from "../models/url.model.js";

export const createUrl = async (details) => {
  return await URL.create(details);
};
export const findUrl = async (details) => {
  return await URL.findOne({ where: details });
};

import URL from "../models/url.model.js";

export const incrementClick = async (hash) => {
  console.log(hash);
  await URL.increment("click", { where: { hash }, by: 1 });
};

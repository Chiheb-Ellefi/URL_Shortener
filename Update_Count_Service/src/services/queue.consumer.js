import URL from "../models/url.model";

export const incrementClick = async (hash) => {
  await URL.increment("click", { where: { hash }, by: 1 });
};

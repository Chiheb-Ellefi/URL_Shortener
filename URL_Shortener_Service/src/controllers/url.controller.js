import axios from "axios";
import { createUrl } from "../services/url.service.js";
import { hashToBase62 } from "../services/hash.js";
import { StatusCodes } from "http-status-codes";

import {
  BadRequestError,
  NotFoundError,
} from "../../config/errors/customErrors.js";
import { cacheAside } from "../services/caching.service.js";

export const addShortUrl = async (req, res) => {
  const response = await axios.get(
    `http://${process.env.UID_GEN_SERVICE}:${process.env.UID_GEN_PORT}`
  );
  const id = response.data;
  const hash = hashToBase62(parseInt(id));
  const { url } = req.body;
  if (!url) {
    throw new BadRequestError("Please provide a url to make it short.");
  }
  const short_url = `http://${process.env.URL_SHORTENER_SERVICE}:${process.env.EXTERNAL_PORT}/${hash}`;
  await createUrl({ url_id: id, url, hash });

  res.status(StatusCodes.CREATED).json(short_url);
};

export const getUrl = async (req, res) => {
  const { hash } = req.params;
  if (!hash) {
    throw new BadRequestError("Invalid URL.");
  }
  const response = await cacheAside(hash);
  if (!response) {
    throw new NotFoundError("The url can't be found.");
  }

  res.status(StatusCodes.PERMANENT_REDIRECT).redirect(response);
};

export const deleteUrl = async (req, res) => {};

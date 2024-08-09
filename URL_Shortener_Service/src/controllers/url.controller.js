import axios from "axios";
import { createUrl, destroyUrl, findUrl } from "../services/url.service.js";
import { hashToBase62 } from "../services/hash.js";
import { StatusCodes } from "http-status-codes";
import QRCode from "qrcode";
import { BadRequestError } from "../../config/errors/customErrors.js";
import { cacheAside } from "../services/caching.service.js";
import { uploadQrCode } from "../utils/uploadQrCode.js";
import { updateDatabaseClicks } from "../services/queue.provider.js";

export const addShortUrl = async (req, res) => {
  const response = await axios.get(
    `http://${process.env.UID_GEN_SERVICE}:${process.env.UID_GEN_PORT}`
  );
  const id = response.data;

  const hash = hashToBase62(parseInt(id));
  const { url, user_id } = req.body;
  if (!url) {
    throw new BadRequestError("Please provide a url to make it short.");
  }
  const short_url = `http://url.global-app/${hash}`;
  // Generate the QR code as a data URL (base64 string)
  const qrCodeDataUrl = await QRCode.toDataURL(short_url, {
    errorCorrectionLevel: "H",
  });

  // Upload the QR code data URL to Firebase Storage
  const qrCodeDownloadUrl = await uploadQrCode({
    dataUrl: qrCodeDataUrl,
    hash,
  });

  const urlObject = {
    url_id: id,
    url,
    hash,
    qr_code: qrCodeDownloadUrl,
    user_id,
  };
  await createUrl(urlObject);

  res.status(StatusCodes.CREATED).json(urlObject);
};

export const getUrl = async (req, res) => {
  const { hash } = req.params;
  if (!hash) {
    throw new BadRequestError("Invalid URL.");
  }
  const url = await cacheAside({
    hash,
  });
  await updateDatabaseClicks(hash);

  res.status(StatusCodes.PERMANENT_REDIRECT).redirect(url.url);
};

export const deleteUrl = async (req, res) => {
  const { hash } = req.params;
  if (!hash) {
    throw new BadRequestError("Invalid URL.");
  }
  await destroyUrl({ hash });
  res
    .status(StatusCodes.ACCEPTED)
    .json(`Url with hash ${hash} was deleted successfully .`);
};

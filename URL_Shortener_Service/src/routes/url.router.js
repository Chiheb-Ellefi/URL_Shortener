import {
  addShortUrl,
  deleteUrl,
  getUrl,
} from "../controllers/url.controller.js";
import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware.js";

const router = Router({});

router.route("/").post(authenticationMiddleware, addShortUrl);
router.route("/:hash").get(authenticationMiddleware, getUrl);
router.route("/:hash").delete(authenticationMiddleware, deleteUrl);

export default router;

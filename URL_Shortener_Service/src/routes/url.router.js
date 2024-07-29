import { addShortUrl, getUrl } from "../controllers/url.controller.js";
import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware.js";

const router = Router({});

router.route("/").post(authenticationMiddleware, addShortUrl);
router.route("/:hash").get(authenticationMiddleware, getUrl);

export default router;

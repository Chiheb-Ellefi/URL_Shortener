import { addShortUrl, getUrl } from "../controllers/url.controller.js";
import { Router } from "express";

const router = Router({});

router.route("/").post(addShortUrl);
router.route("/:hash").get(getUrl);

export default router;

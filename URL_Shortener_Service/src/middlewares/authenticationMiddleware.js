import jwt from "jsonwebtoken";
import { UnauthenticatedError } from "../../config/errors/customErrors.js";
import { client } from "../../config/database/redis_client.js";
export const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  const access_token = authHeader.split(" ")[1].trim();
  const isBlocked = await client.EXISTS(access_token);
  if (isBlocked) {
    throw new UnauthenticatedError("Acess denied, Invalid token.");
  }
  const decoded = jwt.verify(access_token, process.env.JWT_SECRET);
  console.log("decoddeddd", decoded);

  req.body.user_id = decoded.user_id;
  next();
};

import { StatusCodes } from "http-status-codes";
import {
  generateTokens,
  isValid,
} from "../custom_modules/authentication/token.js";
import { addOne } from "../services/user.service.js";
import { deleteSession } from "../services/session.service.js";
import { client } from "../../config/database/redis_client.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await addOne({ username, email, password });
  res.status(StatusCodes.CREATED).json(user);
};

export const login = async (req, res) => {
  const session = await generateTokens(req);
  res.status(StatusCodes.ACCEPTED).json(session);
};

export const logout = async (req, res) => {
  const access_token = req.headers.authorization.split(" ")[1].trim();
  const isTokenValid = isValid(access_token);
  if (isTokenValid) {
    await client.SETEX(access_token, process.env.JWT_EXPIRATION, "");
  }
  await deleteSession({ access_token });
  res.json("User logged out");
};

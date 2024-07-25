import { randomBytes } from "crypto";
import Session from "../models/session.model.js";

export const findSession = async (details) => {
  return await findOne(details);
};
export const refreshToken = () => {
  return randomBytes(32).toString("hex");
};
export const accessToken = (user) => {
  return user.createAccessToken();
};
export const addSession = async (tokens) => {
  return await Session.create(tokens);
};
export const deleteSession = async (details) => {
  return await Session.deleteOne(details);
};

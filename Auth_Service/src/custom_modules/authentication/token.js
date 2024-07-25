import BadRequestError from "../../../config/errors/badRequest.js";
import UnauthenticatedError from "../../../config/errors/unauthenticatedError.js";
import jwt from "jsonwebtoken";
import {
  accessToken,
  addSession,
  refreshToken,
  findSession,
  deleteSession,
} from "../../services/session.service.js";

import { findOne, findOneById } from "../../services/user.service.js";

export const generateTokens = async (req) => {
  const { grant_type } = req.body;
  if (!grant_type) {
    throw new BadRequestError("No grant type provided");
  }
  let session = {};
  // if the grant_type =client_credentials than the server is exchanging the user credentials for the tokens
  if (grant_type == "client_credentials") {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new BadRequestError("Invalid credentials");
    }
    const user = await findOne({ email });
    const isMatch = user.comparePassword(password);
    if (!isMatch) {
      throw new UnauthenticatedError("Access denied, wrong credentials.");
    }
    const access_token = accessToken(user);
    const refresh_token = refreshToken();
    session = {
      access_token,
      refresh_token,
      user_id: user._id,
    };
    await addSession(session);
  } //if the grant_type = refresh_token then the access_token is expired and  the server is exchanging the current refresh_token with a new refresh and access tokens
  else if (grant_type == "refresh_token") {
    let { refresh_token } = req.body;
    if (!refresh_token) {
      throw new BadRequestError("No refresh_token was provided.");
    }
    let access_token = req.headers.access_token;
    session = await findSession({ access_token });
    await deleteSession({ accessToken });
    const user = await findOneById(session.user_id);
    if (refresh_token != session.refresh_token) {
      throw new UnauthenticatedError("Refresh_tokens do not match.");
    }
    refresh_token = refreshToken();
    access_token = await accessToken(user);
    session = {
      access_token,
      refresh_token,
      user_id: user._id,
    };
  }
  return session;
};

export const isValid = (access_token) => {
  const secret = process.env.JWT_SECRET;
  return jwt.verify(access_token, secret);
};

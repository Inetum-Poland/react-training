import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from "../constants.js";

export const generateAccessToken = (user) =>
  jwt.sign({ username: user.username, role: user.role }, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRATION,
  });

export const generateRefreshToken = (user) =>
  jwt.sign({ username: user.username, role: user.role }, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRATION,
  });

export const verifyAccessToken = (token) =>
  jwt.verify(token, ACCESS_TOKEN_SECRET);

export const verifyRefreshToken = (token) =>
  jwt.verify(token, REFRESH_TOKEN_SECRET);

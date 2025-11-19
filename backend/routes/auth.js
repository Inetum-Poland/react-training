import express from "express";
import { users } from "../utils/users.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/tokens.js";

const router = express.Router();
const refreshTokens = [];

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);

  res.json({ accessToken, refreshToken });
});

router.post("/refresh", (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken || !refreshTokens.includes(refreshToken))
    return res.status(403).json({ message: "Forbidden" });

  try {
    const user = verifyRefreshToken(refreshToken);
    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  } catch {
    res.status(403).json({ message: "Invalid refresh token" });
  }
});

export default router;

const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./users");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
const API_PREFIX = "/api/v1";

const ACCESS_TOKEN_SECRET = "supersecret_access_key";
const REFRESH_TOKEN_SECRET = "supersecret_refresh_key";
const ACCESS_TOKEN_EXPIRES = "30s";
const REFRESH_TOKEN_EXPIRES = "5m";

let refreshTokens = [];

const generateAccessToken = (user) =>
  jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES }
  );

const generateRefreshToken = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRES }
  );
  refreshTokens.push(token);
  return token;
};

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing access token" });

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Expired or invalid access token" });
    req.user = user;
    next();
  });
};

app.post(`${API_PREFIX}/login`, (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user)
    return res.status(401).json({ message: "Invalid username or password" });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  res.json({
    accessToken,
    refreshToken,
    user: { id: user.id, username, role: user.role },
  });
});

app.post(`${API_PREFIX}/refresh`, (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(401).json({ message: "Missing refresh token" });
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json({ message: "Invalid refresh token" });

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err)
      return res
        .status(403)
        .json({ message: "Expired or invalid refresh token" });
    const accessToken = generateAccessToken(user);
    res.json({ accessToken });
  });
});

app.get(`${API_PREFIX}/todo`, authenticateToken, (req, res) => {
  const todos = [
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Clean the house", completed: true },
    { id: 3, title: "Walk the dog", completed: false },
  ];
  res.json({ user: req.user.username, todos });
});

app.post(`${API_PREFIX}/logout`, (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((t) => t !== refreshToken);
  res.json({ message: "Logged out successfully" });
});

app.listen(PORT, () =>
  console.log(
    `✅ Mock auth server running on http://localhost:${PORT}${API_PREFIX}`
  )
);

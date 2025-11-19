import express from "express";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../constants.js";
import { todos } from "../utils/todos.js";

const router = express.Router();

router.get("/", (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Missing token" });

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json(todos);
  });
});

export default router;

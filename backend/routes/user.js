import express from "express";

const router = express.Router();

router.get("/account/balance", (req, res) => {
  const randomBalance = Number((Math.random() * 100000).toFixed(2));
  res.json({ balance: randomBalance, format: "pl-PL" });
});

router.get("/settings", (req, res) => {
  const userSettings = {
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    language: "pl-PL",
    theme: "light",
    notifications: true,
  };

  res.json(userSettings);
});

export default router;

import express from "express";

const router = express.Router();

router.get("/account/balance", (req, res) => {
  const randomBalance = Number((Math.random() * 100000).toFixed(2));
  res.json({ balance: randomBalance, format: "pl-PL" });
});

export default router;

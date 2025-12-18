import express from "express";

const router = express.Router();

const cryptoList = [
  { uuid: '3f6a1b2c-9d4e-4a7f-8b21-2c9d8f4a1e77', symbol: "BTC", name: "Bitcoin" },
  { uuid: '7c2d5f91-4b3a-4f8d-9a6e-1f2b3c4d5e6f', symbol: "ETH", name: "Ethereum" },
  { uuid: 'a1b2c3d4-e5f6-47a8-9123-456789abcdef', symbol: "SOL", name: "Solana" },
  { uuid: 'f9e8d7c6-b5a4-4392-8012-3d2c1b0a9f88', symbol: "ADA", name: "Cardano" },
];

router.get("/list", (req, res) => {
  const enrichedList = cryptoList.map((c) => ({
    ...c,
    price: Number((Math.random() * 100000).toFixed(2)),
    format: "pl-PL",
  }));
  res.json(enrichedList);
});

router.get("/:uuid", (req, res) => {
  const { uuid } = req.params;
  const crypto = cryptoList.find((c) => c.uuid === uuid);

  if (!crypto) {
    return res.status(404).json({ error: "Crypto not found" });
  }

  res.json({
    ...crypto,
    price: Number((Math.random() * 100000).toFixed(2)),
    available: Number((Math.random() * 1000).toFixed(2)),
    format: "pl-PL",
  });
});

export default router;
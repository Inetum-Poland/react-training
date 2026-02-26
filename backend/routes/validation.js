import { z } from "zod";
import express from "express";

const router = express.Router();

const userSchema = z.object({
  firstName: z
    .string()
    .min(2, "Imię musi mieć co najmniej 2 znaki")
    .max(30, "Imię może mieć maksymalnie 30 znaków")
    .regex(
      /^[A-Za-zÀ-ÿ\-\s]+$/,
      "Imię może zawierać tylko litery, myślniki i spacje",
    ),
  lastName: z
    .string()
    .min(2, "Nazwisko musi mieć co najmniej 2 znaki")
    .max(40, "Nazwisko może mieć maksymalnie 40 znaków")
    .regex(
      /^[A-Za-zÀ-ÿ\-\s]+$/,
      "Nazwisko może zawierać tylko litery, myślniki i spacje",
    ),
  comment: z
    .string()
    .min(10, "Komentarz musi mieć co najmniej 10 znaków")
    .max(500, "Komentarz może mieć maksymalnie 500 znaków"),
});

router.post("/form", (req, res) => {
  try {
    const result = userSchema.safeParse(req.body);
    if (result.success) {
      res.json({ valid: true, data: result.data });
    } else {
      res.status(400).json({ valid: false, errors: result.error.errors });
    }
  } catch (err) {
    res.status(500).json({ valid: false, error: "Server error" });
  }
});

export default router;

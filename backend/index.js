import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { API_PREFIX } from "./constants.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cryptoRoutes from "./routes/crypto.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/user`, userRoutes);
app.use(`${API_PREFIX}/crypto`, cryptoRoutes);

app.listen(3000, () => console.log("Mock auth server running on port 3000"));

import express from "express";
import cors from "cors";
import type { Request, Response } from "express";

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Fall-In server listening on port ${PORT}`);
});

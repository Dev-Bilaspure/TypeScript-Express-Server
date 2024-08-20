import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { getLatestCommitHash } from "./utils";

dotenv.config();

const DEFAULT_PORT = 8000;
const PORT = process.env.PORT || DEFAULT_PORT;
const NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = NODE_ENV === "production";

const app: Express = express();

// Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(cors()); // Configure CORS as needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(isProduction ? "combined" : "dev")); // Logging

app.get("/", (req: Request, res: Response) => {
  const latestCommit = getLatestCommitHash();
  res.status(200).json({
    message: "Your express app with TypeScript!",
    latestCommit: latestCommit,
  });
});

app
  .listen(PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
  })
  .on("error", (err: Error) => {
    console.error("Error starting server:", err.message);
  });

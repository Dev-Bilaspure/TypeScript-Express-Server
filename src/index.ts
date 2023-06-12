import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.json("Your express app with typescript!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // default: Access-Control-Allow-Origin: *

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express on Vercel!");
});

export default app;

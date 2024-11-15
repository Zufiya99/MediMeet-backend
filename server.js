import express from "express";
import cors from "cors";
import "dotenv/config";

// app config
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/table", async (req, res) => {
  try {
    const response = await fetch("https://api.football-data.org/v4/competitions/PL/standings", {
      headers: {
        "X-Auth-Token": "35811dfae35243f6a2549f034bcff645",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Błąd podczas pobierania danych" });
  }
});

app.listen(5000, () => console.log("Proxy działa na http://localhost:5000"));

// node server.js
const express = require("express");
const fetch = require("node-fetch");
const app = express();

// Root route → fetch random quote
app.get("/", async (req, res) => {
  try {
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(url);
    const data = await response.json();

    res.json({ message: data[0].q });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

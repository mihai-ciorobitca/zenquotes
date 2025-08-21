const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();

app.get("/", (req, res) => {
  const randomQuote = faker.lorem.sentence();
  res.json({ message: randomQuote });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

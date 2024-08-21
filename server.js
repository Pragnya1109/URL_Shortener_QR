const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>URL SHORTENER</h1>");
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("CONNECTION FAILED !!", err);
  });

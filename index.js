const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  // res.send("Hello World");
  axios
    .get("https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD")
    .then(response => {
      res.send(response.data);
    });
});

app.listen(4001, () => {
  console.log("Ready on port 4001");
});

const express = require("express");
require("dotenv").config();
// i can use env variables

const app = express();

app.get("/rest", function (req, res) {
  res.json({
    data: "you git rest endpoint",
  });
});

app.listen(process.env.PORT, function () {
  console.log(`server is ready at http://localhost:${process.env.PORT}`);
});

const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  return res.json({
    msg: "Hello world",
  });
});

app.listen(8001, () => {
  console.log("Product is running on 8001");
});

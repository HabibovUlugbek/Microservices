const express = require("express");
const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/product", (req, res) => {
  return res.json("Product Service");
});

app.get("/", (req, res) => {
  return res.json("Product Service");
});

app.listen(PORT, () => {
  console.log(`Product is runmning on ${PORT} port`);
  console.clear();
});

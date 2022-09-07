const express = require("express");
const PORT = 9000;

const app = express();
app.use(express.json());

app.get("/profile", (req, res) => {
  return res.json("Customer Service");
});

app.get("/", (req, res) => {
  return res.json("Customer Service");
});

app.listen(PORT, () => {
  console.log(`Customer is runmning on ${PORT} port`);
  console.clear();
});

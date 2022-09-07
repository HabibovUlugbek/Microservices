const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", proxy("http://loclahost:8001")); //products
app.use("/shopping", proxy("http://loclahost:8002"));
app.use("/customer", proxy("http://loclahost:8003"));

app.listen(8000, () => {
  console.log("Gateway is running on 8001");
});

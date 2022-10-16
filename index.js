import express from "express";

const app = express();
const port = 9000;

const routes = require("./app/routes")
routes(app)

app.listen(9000, () => {
  console.log(`Starting Server on Port ${port}`);
});

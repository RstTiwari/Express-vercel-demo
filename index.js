import express from "express";
import mongoose from "mongoose"

const app = express();
const port = 9000;

const routes = require("../Express-vercel-demo/app/routes");


app.use("/" , routes)



mongoose
  .connect(
    "mongodb://myfac8ry:myfac8ry@ac-z992smf-shard-00-00.fmmrhks.mongodb.net:27017,ac-z992smf-shard-00-01.fmmrhks.mongodb.net:27017,ac-z992smf-shard-00-02.fmmrhks.mongodb.net:27017/?ssl=true&replicaSet=atlas-piyukq-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(port, () =>
      console.log(`Server Running on Port: http://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
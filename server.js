const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const { request, response } = require("express");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const userDataBase = [];

app.get("/get-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: userDataBase,
  });
});

app.post("/create-data", (request, response) => {
  userDataBase.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});

app.put("/update-data:id", (request, response) => {
  console.log("🚀 ~ file: server.js ~ line 32 ~ app.put ~ request", request);
  const id = request.params.id;
  let userItem = userDataBase.findIndex((user) => user.id === id);
  userDataBase[userItem] = request.body;
  response.status(201).send({
    success: "OK",
    message: "Successful date update",
  });
});

app.delete("/delete-data:id", (request, response) => {
  const id = request.params.id;
  console.log("🚀 ~ file: server.js ~ line 44 ~ app.delete ~ id", id);
  let userItem = userDataBase.findIndex((user) => user.id === id);
  userDataBase.splice(userItem, 1);
  response.status(201).send({
    success: "OK",
    message: "Successful date update",
  });
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});

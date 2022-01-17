const express = require("express");
const app = express();
const port = 3000;

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");
  next();
};

app.use(allowCrossDomain);

// ALL ENTITIES
const entities = ["companies", "users"];

//METHODS
const getStandardResponse = require("./utilities/getStandardResponse");
const getResponseById = require("./utilities/getResponseById");

// ALL VALID REQUESTS
for (let entity of entities) {
  let entityData = require(`./src/${entity}`);
  app.get(`/${entity}`, (req, res) => {
    res.json(getStandardResponse(entityData));
  });
  app.get(`/${entity}/:id`, (req, res) => {
    res.json(getResponseById(entityData, req.params.id));
  });
}

// LISTEN THE PORT
app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});

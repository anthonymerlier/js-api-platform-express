const express = require("express");
const users = require("./src/users");
const companies = require("./src/companies");
const app = express();
const port = 3000;

const getStandardResponse = require("./utilities/getStandardResponse");
const getResponseById = require("./utilities/getResponseById");

const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");
  next();
};

app.use(allowCrossDomain);

// ALL VALID REQUESTS
app.get("/companies", (req, res) => {
  res.json(getStandardResponse(true, "All datas about companies", companies));
});
app.get("/companies/:id", (req, res) => {
  res.json(
    getResponseById(`All datas about the company`, companies, req.params.id)
  );
});

app.get("/users", (req, res) => {
  res.json(getStandardResponse(true, "All datas about users", users));
});
app.get("/users/:id", (req, res) => {
  res.json(getResponseById(`All datas about the user`, users, req.params.id));
});

// FOR ALL REQUESTS UNLISTED PREVIOUSLY
app.get("/*", (req, res) => {
  res.json(getStandardResponse(false, "Cette requête n'existe pas"));
});

// LISTEN THE PORT
app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`);
});

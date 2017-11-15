const bodyParser = require("body-parser");
const db = require("../db/db");
const express = require("express");
const port = 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  next();
});

// user requests landing page:
app.get("/", function(req, res) {
  res.render("index");
});

app.post("/", function(req, res) {
  res.render("index");
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

require("dotenv").config();
const path = require("path");

// Express setup
const express = require("express");
const app = express();

// Auth items
const JsonWebToken = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const BodyParser = require("body-parser");
const SECRET_JWT_CODE = "tacoman";
app.use(BodyParser.json());

//api add
const routes = require("./routes");

// add Json Support
app.use(express.json());

// add routes for apis
app.use(routes);

//Mongo
const db = require("./config/connection");
const bodyParser = require("body-parser");

// host public react
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// start express with mongoose
db.once("open", () => {
  app.listen(process.env.PORT, () =>
    console.log(`Server is listening port ${process.env.PORT}`)
  );
});

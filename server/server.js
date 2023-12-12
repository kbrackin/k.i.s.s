require("dotenv").config();
const path = require("path");
const { authMiddleware } = require("./utils/auth");

// Express setup
const express = require("express");
const app = express();

// Auth items

//api add
const routes = require("./routes");

// add Json Support
app.use(express.json());

// add routes for apis
app.use(routes);

//Mongo
const db = require("./config/connection");

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

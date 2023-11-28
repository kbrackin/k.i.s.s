// require("dotenv").config();
const path = require("path");
const PORT = process.env.PORT || 3000

// Express setup
const express = require("express");
const app = express();

//api add
const routes = require("./routes");

// add Json Support
app.use(express.json());

// add routes for apis
app.use(routes);

// host public react
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// start express

app.listen(process.env.PORT, () => {
  console.log("App listening on port process.env.PORT");
});

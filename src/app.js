const express = require("express");
const app = express();

const games = require("./route/gamesRoute");
app.use("/games", games);

module.exports = app;
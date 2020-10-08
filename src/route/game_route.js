const express = require("express");
const router = express.Router();
const controller = require("../controller/gamesController");

router.get("/", controller.getGamesTotal)
router.get("/:id", controller.getGamesPorId)

module.exports = router
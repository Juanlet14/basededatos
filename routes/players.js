const express = require("express");
const app = express();
const Player = require("../models/player");

app.post("/", async (req, res, next) => {
 // Validación
 const player = new Player({
 name: req.body.name,
 surname: req.body.surname,
 team: req.body.email
 });
 player.save((err, playerSaved) => {
 if(err) {
 res.status(500).json({
 message: "Dabase error"
 })
 }

 res.status(200).json({
    message: "ok",
    player: playerSaved
    })
    })
   })
   module.exports = app;
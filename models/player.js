const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
 {
 name: String,
 surname: String,
 teams: String
 }, 

 {
    versionKey: false,
    collection: "players"
    }
   )
   module.exports = mongoose.model("Player", PlayerSchema);
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = 3000;
const mongoURI = "mongodb://localhost:27017/LaLiga";
const options = {
 useNewUrlParser: true
}

mongoose.connect(mongoURI, options)
    .then(() => console.log("Conectado a la base de datos"))
    .catch(err => console.log(err))

const players = require("./routes/players");
    app.use(express.json());
    app.use("/players", players);

app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
})
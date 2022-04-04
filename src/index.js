const express = require('express');
const mainRouter = require('./routes/index');

const app = express();

const servidor = app.listen(8080, () => {
    console.log("servidor corriendo en puerto " + 8080);
})

servidor.on("error", (err) => {
    console.log("error", err);
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", mainRouter);

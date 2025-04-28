const express = require ("express");
const cors = require ("cors");
const app = express();
const bodyParser = require ("body-parser");
const helmet = require ("helmet");

const usuariosRoute = require("./routes/login.route");


app.use (cors());
app.use (helmet());

app.use (bodyParser.urlencoded({extended:false}));
app.use (bodyParser.json());

app.use ((req, res, next) => {
    res.header("Access-Control-Allow-Origin0", "*");
    res.header (
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-type, accept, Autorization"
    );
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
    }
    next();
})

app.use ("/usuarios", usuariosRoute);

module.exports = app; 
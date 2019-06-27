require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

const enviroment = process.env.NODE_ENV;    // development
const stage = require("./config/ApplicationConfig.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

if (enviroment !== "production") {
    app.use(logger("dev"));
}

app.use("/api/v1", (req, res, next) => {
    res.send("Hello");
    next();
});

app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`);
});

module.exports = app;
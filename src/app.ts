import * as http from "http";
var express = require("express");
var path = require("path");

const routes = {
    login: require("./api/routes/login")
}

var app = express();
let port = process.env.PORT || 8080 // Default to 8080 if not configured

app.set("port", 8080);
app.use('/login', routes.login);

let server = http.createServer(app);
server.listen(port);

module.exports = app;
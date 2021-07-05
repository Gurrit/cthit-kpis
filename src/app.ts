import * as http from "http";
var express = require("express");
var path = require("path");
require('dotenv').config({path: "config/.env"})

const routes = {
    auth: require("./api/routes/auth"),
    app: require("./api/routes/app")
}

var app = express();
let port = process.env.PORT || 8080 // Default to 8080 if not configured

app.set("port", 8080);
app.use('/auth', routes.auth);
app.use('/', routes.app)

let server = http.createServer(app);
server.listen(port);

module.exports = app;
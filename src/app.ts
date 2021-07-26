import * as http from "http";
import {NextFunction, Request, Response} from "express";
var express = require("express");
var path = require("path");

require('dotenv').config({path: "config/.env"})

const routes = {
    auth: require("./api/routes/auth"),
    app: require("./api/routes/app")
}
const middleware = {
    auth: require("./api/middleware/authorizationHandler")
}

const config = {
    sessionConfig: require("./config/sessionConfig")
}

const app = express();
let port = process.env.PORT || 8080 // Default to 8080 if not configured

app.set("port", 8080);
app.use(config.sessionConfig);
app.use(middleware.auth); // makes sure user is authenticated, should be limited to non /auth/* endpoints
app.get("/[a-z]", (req : any, res : any) => {
    res.send("då")
});
app.use('/auth', routes.auth);
app.use('/', routes.app);


let server = http.createServer(app);
server.listen(port);

module.exports = app;
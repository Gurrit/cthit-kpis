import {NextFunction, Request, Response} from "express";
import "express-session";
import "../../types"
let authorizationHelper = require("../helpers/authorizationHelper");

let forceLogin = (req : Request, res : Response, next : NextFunction) => {
    if (req.url.startsWith("/auth")) {
        next();
        return;
    }
    const jwt : string | undefined = req.session.auth;
    if (!jwt || !authorizationHelper.isValidAuth(jwt)) {
        return res.redirect("/auth")
    }
}

module.exports = forceLogin;
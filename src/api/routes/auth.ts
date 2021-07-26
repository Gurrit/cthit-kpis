import {Request, Response} from "express";
import {Token} from "client-oauth2";
let express = require('express');
let router = express.Router();
const Gamma = require("../../config/oauthConfig")
const session = require("express-session");
/*
 * This file handles oauth2 paths needed to login through gamma
 */
router.get('/', (req:Request, res:Response) => {
    const uri = Gamma.gammaAuth.code.getUri();
    return res.redirect(uri);
});

router.get('/callback', async function (req:any, res:any) {
    console.log(req.session)
    Gamma.gammaAuth.code.getToken(req.originalUrl)
        .then((user:Token) => {
            req.session.auth = user.accessToken;
        }).then(() => {
            res.redirect("/");
    })
        .catch(() => {
            console.log("failed to set access token");
            res.redirect("/error")

        });
});

module.exports = router;
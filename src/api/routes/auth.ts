import {Request, Response} from "express";
var express = require('express');
var loginService = require("../services/loginService");
var router = express.Router();
/*
 * This file handles oauth2 paths needed to login through gamma
 */
router.get('/', (req:Request, res:Response) => {
    const clientId : string = process.env.OAUTH_CLIENT || "noID";
    const redirectUrl : string = process.env.OAUTH_REDIRECT_URI || "http://localhost:8080/";
    const baseUrl : string = process.env.OAUTH_EXTERNAL_HOST || "http://localhost:8081/api";
    return res.redirect(
        `${baseUrl}/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}`);
});

router.get('/callback', function(req: Request, res: Response) {
    const code : any = req.query.code; // TODO Fix
    let user = loginService.authenticateUser(code)
    return res.redirect("/");
    //return res.write(code);
})

module.exports = router;
import {Request, Response} from "express";
import {Session} from "express-session";
let express = require("express");
const session = require("express-session");
var router = express.Router();

router.get("/", function (req: any, res: Response) {
    return res.send("hej");
})

module.exports = router;
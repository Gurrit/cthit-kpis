var express = require('express');
var router = express.Router();

/*
 * This file handles oauth2 paths needed to login through gamma
 */
router.get('/', function(req: any, res: any) {  // TODO Fix any
    const client_id : string = "1234"     // TODO
    const redirect_url : string = "redirect"
    return res.redirect("https://youtube.com")
});

module.exports = router;
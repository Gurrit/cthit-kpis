let Axios = require("axios");

let isValidAuth = function (jwt : string) : boolean {
    let endpoint : string = `${process.env.OAUTH_INTERNAL_HOST}/auth/valid_token`;

    return true;
}

module.exports = { isValidAuth };
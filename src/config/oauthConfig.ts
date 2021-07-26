var ClientOauth2 = require("client-oauth2");

const gammaAuth = new ClientOauth2({
    clientId: process.env.OAUTH_CLIENT,
    clientSecret: process.env.OAUTH_SECRET,
    accessTokenUri: `${process.env.OAUTH_INTERNAL_HOST}/oauth/token`,
    authorizationUri: `${process.env.OAUTH_EXTERNAL_HOST}/oauth/authorize`,
    redirectUri: `${process.env.OAUTH_REDIRECT_URI}`
});


module.exports = { gammaAuth }
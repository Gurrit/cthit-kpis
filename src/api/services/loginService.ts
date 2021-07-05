import {AxiosResponse} from "axios";

const axios = require("axios");

let authenticateUser = async function (code : string) {
    const oauthBaseUrl : string = process.env.OAUTH_INTERNAL_HOST || "http://localhost:8081/api";
    const oauthClientId : string = process.env.OAUTH_CLIENT || "id";
    const oauthClientSecret : string = process.env.OAUTH_SECRET || "secret"
    const oauthRedirect : string = process.env.OAUTH_REDIRECT_URI || "localhost:300"
    const uri : string = `${oauthBaseUrl}/oauth/token`
    const auth = Buffer.from(`${oauthClientId}:${oauthClientSecret}`, 'utf-8').toString('base64')
    console.log(uri);
    let params = {
        "client_id": oauthClientId,
        "client_secret": oauthClientSecret,
        "grant_type": "authorization_code",
        "code":code,
        "redirect_uri":oauthRedirect
    };
    await axios.post(uri, Object.keys(params)
            // @ts-ignore
            .map(key => `${key}=${params[key]}`)
            .join('&'),
        {
            headers: {
            'Authorization': 'Basic ' + auth,
            'Content-Type': "application/x-www-form-urlencoded"
        }})
        .then((token : AxiosResponse) => {
            return token.data;
        })
        .catch((e : any) => {
            console.log("could not connect to oauth service");
            console.log(e);
            return;
        });
};

let isAuthenticated = function () : boolean {
    return true;
}

module.exports = {authenticateUser, isAuthenticated}
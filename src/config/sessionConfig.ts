const redisClientConfig = require("./redisConfig");
const session = require("express-session");
var connectRedis = require("connect-redis");

const RedisStore = connectRedis(session);

const sessionConfig = session({
    store: new RedisStore({client: redisClientConfig.redisClient}),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,    // Secure cookie (https) if in prod, not otherwise
        httpOnly: false,
        maxAge: 1000 * 60 * 60 // session lives for 1 hour
    }
});

module.exports = sessionConfig;
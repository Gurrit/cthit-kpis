var redis = require("redis");


const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || "redis",
    port: process.env.REDIS_PORT || 6379
});

redisClient.on('error', (err : any) => {
    console.log("could not connect to redis");
});
redisClient.on('connect', (success : any) => {
    console.log("connected to redis");
});


module.exports = { redisClient }
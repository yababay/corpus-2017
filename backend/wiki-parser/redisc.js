const dotenv = require('dotenv').config()
const redis = require('redis')
const bluebird = require('bluebird')
bluebird.promisifyAll(redis)
const creds = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
}

module.exports = redis.createClient(creds)


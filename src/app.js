const Koa = require('koa')
const helmet = require('koa-helmet')
require('dotenv').config()

const app = module.exports = new Koa()

app.use(helmet())

require('./route')

app.listen(process.env.PORT || 3000)
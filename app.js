const Koa = require('koa')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()

router
  .get('/', async ctx => {
    ctx.body = 'index'
  })
  .post('/message', async ctx => {
    console.log(ctx.request.body)
    ctx.body = 'message'
}) 

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5000);
console.log('Listening on port 5000')
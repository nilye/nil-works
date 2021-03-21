const Koa = require('koa')
const send = require('koa-send')
const app = new Koa()

app.use(async ctx => {
	console.log(ctx.path)
	let path = ctx.path
	if (path === '/' || path === '/proj') path = 'index.html'
	if (path === '/nebula') path = '/nebula/index.html'
	await send(ctx, path, { root: __dirname + '/dist' })
})

app.listen(80)

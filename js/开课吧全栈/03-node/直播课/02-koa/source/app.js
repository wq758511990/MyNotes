const KKB = require('./kkb')
const app = new KKB()
const Router = require('./router')
const router = new Router();

const static = require('./static')
app.use(static(__dirname + '/public'));

router.get('/index', async ctx => { ctx.body = 'index page'; });
router.get('/post', async ctx => { ctx.body = 'post page'; });
router.get('/list', async ctx => { ctx.body = 'list page'; });
router.post('/index', async ctx => { ctx.body = 'post page'; });
// 路由实例输出⽗中间件 router.routes()
app.use(router.routes());


// const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
// app.use(async (ctx, next) => {
//     ctx.body = "1";
//     await next();
//     ctx.body += "5";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "2";
//     await delay();
//     await next();
//     ctx.body += "4";
// });
// app.use(async (ctx, next) => {
//     ctx.body += "3";
// });

app.listen(3000, () => {
    console.log('server running on ' + 3000)
})
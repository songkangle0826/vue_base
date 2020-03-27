const Koa = require('koa');
const app = new Koa();

// 处理post请求
const bodyparser = require('koa-bodyparser');
const router = require("koa-router")({ prefix:"/api" })


// 设置cookir加密
app.keys = ["some secret","another secret"];

const goods = [
    { id: 1,text: "webpack全栈架构师",price: 1000},
    { id: 2,text: "websss全栈架构师",price: 1000}
];


// /api/goods
router.get('/goods',ctx=>{
    ctx.body = {
        code : 1,
        goods
    }
})

// /api/detail
router.get('/detail',ctx=>{
    ctx.body = {
        code : 1,
        data: goods.find(good => good.id === ctx.query.id)
    }
})


router.post('/login',ctx=>{
    const user = ctx.request.body
    if (user.username == 'skl'){
        const  token = 'a mock token';
        ctx.cookies.set('token',token);
        ctx.body = {ok:1,token}
    }else {
        ctx.body = {ok:0};
    }
})


// 解析post数据并注册路由
app.use(bodyparser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080);
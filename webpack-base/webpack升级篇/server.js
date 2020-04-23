let express = require('express');
let app = express();

let webpack = require('webpack');



// 安装 yarn add webpack-dev-middleware -D
// 中间件
let middleware = require('webpack-dev-middleware')
let config = require('./webpack.base.js');
let compiler = webpack(config)
app.use(middleware(compiler))


app.get('/user',(req,res)=>{
    res.json({name:'哈哈哈'})
})

app.listen(3000);
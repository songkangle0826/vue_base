let { smart } = require('webpack-merge');
let base = require('./webpack.base.js');




module.exports = smart(base,{
    mode: 'development',
})



// 使用
// npm run dev -- --config webpack.prod.js
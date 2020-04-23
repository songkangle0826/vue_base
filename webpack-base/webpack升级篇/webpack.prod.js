let { smart } = require('webpack-merge');
let base = require('./webpack.base.js');

// 压缩优化css (用于优化或者压缩CSS资源)
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 插件用来缩小（压缩优化）js文件
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = smart(base,{
    mode: 'production',
    optimization:{  // 优化项(生产环境才会走)
        minimizer:[
            new UglifyJsPlugin({
                cache: true,        // 是否缓存
                parallel: true,     // 开启多进程打包
                sourceMap: true,    // 映射,更好的调试(es6->es5)
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})
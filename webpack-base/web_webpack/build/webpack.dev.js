const Webpack = require('webpack')
const path = require('path')
const webpackConfig = require('./webpack.config关于vue的配置')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(webpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        overlay: {
            warnings: true,
            errors:true
        },
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin()
    ]
})


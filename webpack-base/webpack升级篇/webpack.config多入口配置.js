const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    // 多入口
    entry:{
        home: './src/index.js',
        other: './src/other.js'
    },
    output:{
        // [name] home,other
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'build')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks: ['home']       // 打包自己的代码块
        }),
        new HtmlWebpackPlugin({
            template: './other.html',
            filename: 'other.html',
            chunks: ['other'],
            // chunks: ['other','home']
        }),
    ]
}
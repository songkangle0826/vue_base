const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// 多进程打包
let Happypack = require('happypack');
module.exports = {
    mode: 'development',
    entry: './src/indexwebpack自动优化功能.js',
    devServer:{
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    module:{
        noParse: /jquery/,  // 不去解析jquery中的依赖关系
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src'),
                //use:{
                //    loader: 'babel-loader',
                //    options:{
                //        presets:[
                //            '@babel/preset-env',
                //            '@babel/preset-react'
                //        ]
                //    }
                //}
                use: 'Happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: 'Happypack/loader?id=css'
            }
        ]
    },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 用于忽略某些特定的模块，让webpack不把这些指定的模块打包进去
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // //moment这个库中，如果引用了./locale/目录的内容，就忽略掉，不会打包进去

        new Happypack({
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }]
        }),
        new Happypack({
            id: 'css',
            use: ['style-loader','css-loader']
        })

    ]
}
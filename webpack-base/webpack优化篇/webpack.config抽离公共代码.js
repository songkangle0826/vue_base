const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
    optimization:{
        splitChunks:{   // 分割代码块
            cacheGroups: {  // 缓存组
                common:{    // 公共的模块
                    chunks: 'initial',
                    minSize: 0,     //多少个字节以上抽离
                    minChunks: 2,   // 引用多少次以上抽离
                },
                vendor:{        // 第三方
                    priority: 1,    // 权重 (先抽离第三方,在抽离业务)
                    test: /node_modules/,   // 第三方
                    chunks: 'initial',
                    minSize: 0,     //多少个字节以上抽离
                    minChunks: 2,   // 引用多少次以上抽离
                }
            }
        }
    },
    mode: 'development',
    entry: {
        index: './src/index.js',
        other: './src/other.js',
    },
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
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        // 用于忽略某些特定的模块，让webpack不把这些指定的模块打包进去
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // //moment这个库中，如果引用了./locale/目录的内容，就忽略掉，不会打包进去
    ]
}
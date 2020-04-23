const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//(1).cleanWebpackPlugin
//(2).copyWebpackPlugin
//(3).bannerPlugin




module.exports = {
    mode: 'production', // production
    // 多入口
    entry:{
        home: './src/index.js',
    },
    output:{
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    /*
    * 1).源码映射,会单独生成一个sourcemap文件,出错了会标识,当前报错的行列
    *   devtool: 'source-map',
    * 2).不会产生单独的文件,但是可以显示行和列
    *   devtool: 'eval-source-map',
    * 3).不会产生列,但是是一个单独的映射文件
    *   devtool: 'cheap-module-source-map', // 产生后你可以保留起来
    * 4).不会产生文件,集成在打包后的文件中,不会产生列
    *   devtool: 'cheap-module-eval-source-map'
    * */
    devtool: 'source-map',    // 增加映射文件,可以帮我们调试源代码
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        })
    ],
    // 改代码实时监测, (实时打包文件)
    watch: true,
    watchOptions:{  // 监控的选项
        poll:1000,  //每秒问我1000次
        aggregateTimeout: 500, // 防抖  我一直输入代码, 500毫秒我输入一下打包
        ignored: /node_modules/,    // 不需要进行监控那个文件
    }
}
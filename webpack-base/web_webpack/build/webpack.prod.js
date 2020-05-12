const path = require('path')
const webpackConfig = require('./webpack.config')
const WebpackMerge = require('webpack-merge')

const CopyWebpackPlugin = require('copy-webpack-plugin')        // 在webpack中拷贝文件和文件夹
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')       //压缩单独的css文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象。
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = WebpackMerge(webpackConfig,{
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins:[
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname,'../public'),
            to: path.resolve(__dirname,'../dist'),
            // toType  file 或者 dir                        可选，默认是文件
            // force   强制覆盖前面的插件            可选，默认是文件
            // context                                            可选，默认base   context可用specific  context
            // flatten  只拷贝指定的文件               可以用模糊匹配
            // ignore: ['.*']  忽略拷贝指定的文件            可以模糊匹配
        }]),
        // new ExtractTextPlugin({
        //     filename: 'css/style.css',
        //     // Setting the following option to `false` will not extract CSS from codesplit chunks.
        //     // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
        //     // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
        //     // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
        //     allChunks: true,
        // }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         compress: {
        //             // warnings: false
        //         }
        //     },
        //     sourceMap: true,
        //     parallel: true
        // }),
        

    ],
    // 优化
    optimization:{
        minimizer:[
            new UglifyJsPlugin({    // 压缩js
                uglifyOptions: {
                    compress: {
                        //warnings: false
                    }
                },
                sourceMap: true,
                parallel: true
                // cache: true,        // 是否启用文件缓存，默认缓存在node_modules/.cache/uglifyjs-webpack-plugin.目录
                // arallel: true,      ////使用多进程并行运行来提高构建速度
                // sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({})     //压缩css
        ],
        // splitChunks:{
        //     chunks: 'all',
        //     cacheGroups:{
        //         libs:{
        //             name: 'chunk-libs',
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: 10,
        //             chunks: 'initial'   // 只打包出话是依赖的第三方
        //         }
        //     }
        // }
    }
})


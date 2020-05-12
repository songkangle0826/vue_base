const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',   // 开发环境
    // 生成单个入口文件
    entry: ["@babel/polyfill",path.resolve(__dirname,'../src/main.js')],
    // 生成多个入口文件
    // entry: {
    //     main: path.resolve(__dirname,'../src/main.js'),
    //     header: path.resolve(__dirname,'../src/header.ejs')
    // },
    output:{
        // filename: 'output.js',                      // 打包后的文件名称
        // path: path.resolve(__dirname,'../dist')     // 打包后的目录
        filename: '[name].[hash:8].js',                // 避免了缓存的问题
        path: path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]      //注意从右往左解析
            },
            // 配置sass,less等
            // {
            //     test: /\.less$/,
            //     use: ['style-loader','css-loader','postcss-loader','less-loader']      //注意从右往左解析
            // },
            // 配置带有css前缀的属性
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options:{
                            plugins: [require('autoprefixer')]
                        }
                    },
                    'less-loader'
                ]    //注意从右往左解析
            },
            // 配置js,es6/7,8,9,10转义到es5
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    },
                    
                },
                exclude:/node_modules/
            },
            // 配置打包图片,字体,媒体,等文件
            {
                test: /\.(jpe?g|png|gif|svg)$/i,    // 图片文件
                use:[
                    // url-loader工作的两种情况:
                    // 首先调用url-loader 比较文件的大小是否超过限制limit
                    // 如果小于limit,把文件直接打包成base64注入到代码中
                    // 如果大于limit,则会调用file-loader将文件移到输出的目录中
                    {
                        loader: 'url-loader',
                        options:{
                            limit:10240,
                            fallback:{
                                loader: 'file-loader',
                                options:{
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: '哈哈哈',
            template: path.resolve(__dirname,'../public/index.html'),   // html模板所在的文件路径
            filename: 'index.html', // 输出的html的文件名称
            // chunks: ['main'],    // 与入口文件对应的模块名
            // minify:{
            //     collapseWhitespace: true,  ////是否去除空格，默认false
            //     minifyCSS: true,    //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
            //     minifyJS: true,     ////是否压缩html里的js（使用uglify-js进行的压缩）
            //     removeComments: true, //是否移除注释 默认false
            // },
            // inject: 'head'
        }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname,'../public/header.html'),
        //     filename: 'header.html',
        //     chunks: ['header']    // 与入口文件对应的模块名
        // }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].css'
        })
    ],
}
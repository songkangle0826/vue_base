const path = require('path'),
    Webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    vueLoaderPlugin = require('vue-loader/lib/plugin')

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
                test: /\.vue$/,
                use:['vue-loader']
            },
            {
                test: /\.css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    // 'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            plugins:[require('autoprefixer')]
                        }
                    }
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
                    // MiniCssExtractPlugin.loader,
                    'vue-style-loader',
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
    // resolve配置用来影响webpack模块解析规则。解析规则也可以称之为检索，索引规则。配置索引规则能够缩短webpack的解析时间，提升打包速度。
    resolve:{
        // //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias:{
            'vue$':'vue/dist/vue.runtime.esm.js',
            '@':path.resolve(__dirname,'../src')
        },
        // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['*','.js','.json','.vue']
    },
    devServer:{
        host: '0.0.0.0',                            // 指定使用一个 host。默认是 localhost
        port: 8080,                                 // 端口号
        hot: true,                                  // 启用 webpack 的 模块热替换 功能
        contentBase: path.join(__dirname, 'dist'),  // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
        compress: true,                             //一切服务都启用 gzip 压缩
        // open:true                                //是否自动打开默认浏览器
        hotOnly: true,                              // 编译失败不需要刷新页面
        // lazy: true,                              //当启用lazy.dev-server会仅在请求时进行编译。这意味着webpack不会监控文件改变，所以称该模式为lazy mode.
        overlay: {                                  //在浏览器上全屏显示编译的errors或warnings。默认是关闭的。如果只想显示编译错误。则如下配置
            warnings: true,
            errors:true
        },
        proxy:{                 //未来保证在同一域名下，请求一些在其他域名下的api接口时会用到该配置。跨域请求
            "/api": {
                target: 'http://www.baidu.com:8080',    //要使用url模块解析的url字符串
                secure: false,          // 默认情况下如果请求的服务是https的，并且证书是未认证的的，则该错未认证证书默认是无法使用的。如果想要使用该证书。则需要进行如下配置，关闭安全检测。
                pathRewrite: {          // 如果不想始终传递/api,则需要重写路径
                    '^/api' : ''
                },
                changeOrigin: true,     // changeOrigin参数, 是一个布尔值, 设置为true, 本地就会虚拟一个服务器接收你的请求并代你发送该请求,接口跨域需要这个参数配置
            }
        }
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
        }),
        new vueLoaderPlugin(),
        new Webpack.HotModuleReplacementPlugin()
    ],
}
// webpack是node写出来的 有node的写法

// __dirname表示当前文件所在的目录，
// __filename表示正在执行脚本的文件名
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// 抽离css为less
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


// 压缩优化css (用于优化或者压缩CSS资源)
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 插件用来缩小（压缩优化）js文件
const  UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const webpack = require('webpack')


module.exports = {
    optimization:{  // 优化项(生产环境才会走)
        minimizer:[
            new UglifyJsPlugin({
                cache: true,        // 是否缓存
                parallel: true,     // 开启多进程打包
                sourceMap: true,    // 映射,更好的调试(es6->es5)
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    mode: 'development',   // 模式,默认两种 production(生产) development(开发)
    entry: './src/index.js',    // 入口
    output:{                    // 出口
        filename: 'bundle.[hash].js',       // 打包后的文件名(产生新的文件)
        // path.resolve(__dirname)  //解析成一个绝对路径(__dirname,'dist')以当前目录打包一个dist模块
        path: path.resolve(__dirname,'build'),  //打包后的bundle放哪呢 path路径必须是一个绝对路径
        // publicPath: 'http://www.baidu.com'
    },
    devServer:{ //开发服务器的配置
        port: 2020, // 端口号
        progress: true, // 加进度条
        contentBase: './build',     // contentbase代表html页面所在的相对目录，如果我们不配置项，devServer默认html所在的目录就是项目的根目录，这个时候启动服务，访问地址通常会出现下面这样的场面
        compress: true,             // gizp压缩
    },
    // 不需要打包
    // 意思是如果需要引用一个库，但是又不想让webpack打包（减少打包的时间），并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用（一般都以import方式引用使用），那就可以通过配置externals。
    externals:{
        jquery: '$',      // 这个得在index.html中引用jquery(cdn上的最好)
    },
    module:{  // 模块
        //
        rules:[  // 规则  cssloader
            /*{
                // css-loader 接续@import这种语法
                // style-loader 他是把css插入到head标签中
                test:/\.css$/,
                // loader 的特点 希望单一
                // loader的用法 字符串只用一个loader
                // use: 'css-loader',
                // 多个loader需要[]
                // use: ['style-loader','css-loader','less-loader'],     //// loader的顺序,默认从右向左执行
                // loader还可以写成对象的方式,
                // 可以处理less内容
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            // attributes: '',
                            // injectType: '',
                            // base: '',
                            // esModule: ''
                            // insert: "top",        // 插到哪里 (顶部)
                            // singleton:true        // 是否只使用一个style,会将页面上的style标签合成一个
                        }
                    },
                    'css-loader',
                ]
            },*/
            /*{
                // less(less less-loader) sass(node-sass sass-loader) stylus(stylus stylus-loader)
                test:/\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options:{
                            // insert: "top",        // 插到哪里 (顶部)
                            // singleton:true // 是否只使用一个style,会将页面上的style标签合成一个
                        }
                    },
                    'css-loader',       // @import 解析路径
                    'less-loader'       // 把less -> css
                ]
            },*/
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,    // 抽离成link的引入方式
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                // less(less less-loader) sass(node-sass sass-loader) stylus(stylus stylus-loader)
                test:/\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',       // @import 解析路径
                    'postcss-loader',
                    'less-loader'      // 把less -> css
                ]
            },
            // eslin 代码的校验
            // {
            //     test: /\.js$/,
            //     use:{
            //         loader: 'eslint-loader',
            //         options:{
            //             enforce: 'pre', //previous(在普通loader前面执行)  post(在普通loader后面执行)
            //         }
            //     },
            // },
            {
                test: /\.js$/,      // normal 普通的loader
                use:{
                    loader: 'babel-loader',
                    options:{  // 用babel-loader需要把es6-> es5
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            // 解析类,类的装饰器等等
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            // 解析如'aa'.include('a')
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.resolve(__dirname,'src'),
                exclude: /node_modules/,
            },
            // 设置全局jq
            {
                test: require.resolve('jquery'),
                use: 'expose-loader?$',         // 把jq设置为全局变量
            },
            // 图片,资源等
            {
                test: /\.(png|jp(e)g|gif)$/,
                use: {
                    // 做一个限制,url,限制内的会生成base64,
                    // 大于的则会file-loder产出 (base64生成到页面上的比原来的文件大1/3)
                    loader: 'url-loader',
                    options:{
                        limit: 200*1024,
                        publicPath: '/img/'
                    },
                    
                }
            },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            }
            
        ]
    },
    plugins:[   // 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',       // 模板
            filename: 'index.html',              // 输入的名字
            // minify:{ // 最小化操作
            //     removeAttributeQuotes: true,    // 去双引号等
            //     collapseWhitespace: true,       // 折叠压缩到一行
            // },
            // hash: true,     // 加版本
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',       // 在每个模块中都注入$(jquery)符合
        })
    ]
}
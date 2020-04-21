const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const webpack = require('webpack')


//(1).cleanWebpackPlugin
//(2).copyWebpackPlugin
//(3).bannerPlugin

module.exports = {
    entry:{
        home: './src/index.js',
    },
    output:{
        filename: '[name].[hash].js',
        path: path.resolve(__dirname,'build')
    },
    devServer:{
        // 跨域处理的三种方式
        // 3. 有服务端,不用用代理来处理,能不能在服务端启动webpack端口用服务端端口
        // 服务端做处理
        /*
        *
         let middleware = require('webpack-dev-middleware')
         let config = require('./webpack.base.js');
         let compiler = webpack(config)
         app.use(middleware(compiler))
        * */
        // 2. 我们前端只想单纯模拟数据
        // before(app){   // webpack提供的方法
        //     app.get('/user',(req,res)=>{
        //         res.json({name:'哈哈哈11'})
        //     })
        // },
        // 1配置跨域请求
        proxy:{ // 重写的方式,把请求代理到express是服务器上
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api':''
                },    // 重写
            },  // 配置了一个代理
        }
    },
    // resolve:{   // 解析 第三方包 common
    //     module: [path.resolve('node_modules')],        // 强制去哪里查找
    //     alias:{ // 别名
    //         // bootstrap: 'bootstrap/dist/css/bootstrap.css',
    //     },
    //     mainFields:['style','main'],
    //     mainFiles: [], // 入口文件的名字
    //     extensions: ['.js','.css','.json','vue']
    // },
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
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        // new CleanWebpackPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from: './doc',
        //         to: ''
        //     }
        // ]),
        // 打包声明  /*! make 2019 by 哈哈 */
        // new webpack.BannerPlugin('make 2019 by 哈哈'),
        new webpack.DefinePlugin({  //定义一些变量
            // 区分不同的环境变量
            'DEV': JSON.stringify('dev') || "'dev'",   // console.log(dev)
            'FLAG': 'true',
            'ex': '1+1',
        })
    ],
    
}
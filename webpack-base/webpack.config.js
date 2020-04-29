const HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    glob = require('glob'),
    PruifyCssPlugin = require('purifycss-webpack'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'), // vue-loader 插件，它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块
    webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',           // 打包后生成的文件名称
        path: path.resolve(__dirname,'dist'),   // 打包后放哪里,绝对路径
        // publicPath: './',         // 指定把资源前面加上 服务器的地址(一般要做cdn加速)
    },
    devServer:{                     //开发服务器的配置
        port: 2020,                 // 端口号
        progress: true,             // 加进度条
        contentBase: './dist',     // contentbase代表html页面所在的相对目录，如果我们不配置项，devServer默认html所在的目录就是项目的根目录，这个时候启动服务，访问地址通常会出现下面这样的场面
        compress: true,             // gizp压缩
        hot: true,                  // 开启热更新
        // open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页，
        open: true,
        proxy:{     // 重写的方式,把请求代理到express是服务器上
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api':''
                },    // 重写
            },  // 配置了一个代理
        },
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins:[
                            // 解析类,类的装饰器等待
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            // 解析如'aa'.include('a')
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                // 表示哪些目录中的 .js 文件需要进行 babel-loader
                include: path.resolve(__dirname,'src'),
                // 表示哪些目录中的 .js 文件不要进行 babel-loader
                exclude: /node_modules/,  // 可以优化打包时间
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    },
                ]
            },
            {
                test: /\.less/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options:{
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'less-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'url-loader',
                options:{
                    limit: 1024
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    esModule: false  // 注意esModule参数是表示是否使用es6模块的导出，默认是启用的，根据实际情况使用
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',    // 模板
            filename: 'index.html',              // 输出的名字
            minify:{ // 最小化操作
                removeAttributeQuotes: true,    // 去双引号等
                collapseWhitespace: true,       // 折叠压缩到一行
            },
            hash: true,     // 加版本
        }),
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new PruifyCssPlugin({
            paths:glob.sync(path.join(__dirname,'public/*.html'))//src下所有的html
        }),
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('make 2020 by 哈哈'),
        new webpack.ProvidePlugin({
            $: 'jquery',       // 在每个模块中都注入$(jquery)符合
        }),
        new webpack.NamedChunksPlugin(),        // 打印热更新的模块路径
        new webpack.HashedModuleIdsPlugin(),    // 热更新插件
    ]
}
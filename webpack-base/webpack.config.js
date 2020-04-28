const HtmlWebpackPlugin = require('html-webpack-plugin'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    glob = require('glob'),
    PruifyCssPlugin = require('purifycss-webpack');

console.log(path.join(__dirname,'public/*.html'));

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.[hash].js',           // 打包后生成的文件名称
        path: path.resolve(__dirname,'dist'),   // 打包后放哪里,绝对路径
        publicPath: './',         // 指定把资源前面加上 服务器的地址(一般要做cdn加速)
    },
    module:{
        rules:[
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new PruifyCssPlugin({
            paths:glob.sync(path.join(__dirname,'public/*.html'))//src下所有的html
        })
    ]
}
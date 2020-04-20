// webpack是node写出来的 有node的写法

// __dirname表示当前文件所在的目录，
// __filename表示正在执行脚本的文件名
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')







module.exports = {
    mode: 'development',   // 模式,默认两种 production(生产) development(开发)
    entry: './src/index.js',    // 入口
    output:{                    // 出口
        filename: 'bundle.[hash].js',       // 打包后的文件名(产生新的文件)
        // path.resolve(__dirname)  //解析成一个绝对路径(__dirname,'dist')以当前目录打包一个dist模块
        path: path.resolve(__dirname,'build'),  //打包后的bundle放哪呢 path路径必须是一个绝对路径
    },
    devServer:{ //开发服务器的配置
        port: 2020, // 端口号
        progress: true, // 加进度条
        contentBase: './build',     // contentbase代表html页面所在的相对目录，如果我们不配置项，devServer默认html所在的目录就是项目的根目录，这个时候启动服务，访问地址通常会出现下面这样的场面
        compress: true,             // gizp压缩
    },
    plugins:[   // 数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',       // 模板
            filename: 'index.html',              // 输入的名字
            minify:{ // 最小化操作
                removeAttributeQuotes: true,    // 去双引号等
                collapseWhitespace: true,       // 折叠压缩到一行
            },
            hash: true,     // 加版本
        })
        
    ]
}
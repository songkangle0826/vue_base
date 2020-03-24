// webpack是node写出来的 才有node的写法

let path = require('path');
// __dirname表示当前文件所在的目录，
// __filename表示正在执行脚本的文件名

module.exports = {
    mode: 'development',   // 模式,默认两种 production(生产) development(开发)
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',       // 打包后的文件名
        path: path.resolve(__dirname,'dist'),  // path路径必须是一个绝对路径
    },
}
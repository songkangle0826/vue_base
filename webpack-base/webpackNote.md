## Webpack优化方法和优化策略

### 一:对图片资源进行压缩
```javascript
/*
* 对图片进行压缩:
*   1. 引入图片前使用工具进行压缩
*   2. 也可以用webpack进行压缩.使用(image-webpack-loader)这个loader进行压缩
* */

// 安装  npm install image-webpack-loader --save-dev

// 配置
module.exports = {
    rules:[{
        test: /\.(gif|png|gpe?g|svg)$/i,
        use:[
            'filter-loader',
            {
                loader: 'image-webpack-loader',
                options:{
                    disable: true
                }
            }
        ]
    }]
}
```

### 二:通过externals(伊珂丝摘呢丝)配置来提取常用库
实际开发项目中,我们不需要实时调式各种库的源码,这时候考虑使用external选择了



### 三:提取公共代码



### 四:缩小文件的搜索范围
#### 1.优化Loaders配置
由于loader对文件的转换操作比较耗时,所以尽可能少的文件被Loaders处理,优化配置
- 优化正则匹配
- 通过cacheDirectory选项开启缓存
- 通过include,exclude来减少被处理的文件
```javascript
// 原先配置
let obj = {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    include: [resolve('src'), resolve('test')]
}

// 优化配置:
let obj = {
    // 如果项目中只有js文件,就不要写/\.jsx?$/,以提升正则表达式的性能
    test: /\.js$/,
    // babel-loader支持缓存转换出的结果,通过cacheDirectory选项开启 或者transform-runtime 插件
    use: [{
        loader: 'babel-loader',
        options:{
             cacheDirectory: true
        } 
    }],
    // 通过include,exclude来减少被处理的文件
    include: [resolve('src')],
    // 比如babel-loaader不去解析node_modules
    exclude: 'node_modules'
}

// 使用transform-runtime插件
let obj = {
    "presets": [
        "env",
        "react"
    ],
    "plugins": ["transform-runtime"]
}
```


#### Resolve配置优化
webpack在启动后会从配置的入口模块出发找出所有依赖的模块,Resolve配置webpack如何寻找模块所对应的文件

##### Resolve.alias
配置项通过别名把原来导入的路径映射成一个新的导入路径
```javascript
module.exports = {
    resolve: {
        alias:{
            '@': resolve('src'),
            // alias 还支持 $ 符号来缩小范围到只命中以关键字结尾的导入语句
            'vue$': 'vue/dist/vue.esm.js',
            
        }
    }  
}   
// 使用,通过以上@配置,引用src下面的文件,就可以直接这么写?
import common from '@/common.js';

// vue$只会命中以vue结尾的导入语句,及import 'vue'关键字替换成import 'vue/dist/vue.esm.js'
```

##### Resolve.extensions
在导入语句没有带文件后缀时,Webpack会自动带上后缀尝试访问文件是否存在,resolve.extensions用于配置尝试过程中用到的后缀列表,默认是:
```javascript
module.exports = {
    resolve: {
        extensions:['.js','.json'],
        // extensions:['.ts','.js','.json']
    }  
} 
// 也就是说当遇到  require('./data')  这样的导入语句时，Webpack 会先去寻找  ./data.js  文件，如果该文件不存在就去寻找  ./data.json  文件， 如果还是找不到就报错。
```

##### Resolve.modules配置
resolve.modules 用于配置Webpack去哪些目录下寻找第三方模块。resolve.modules的默认值是［node modules］，含义是先去当前目录的/node modules目录下去找我们想找的模块，如果没找到，就去上一级目录../node modules中找，再没有就去../ .. /node modules中找，以此类推，这和Node.js的模块寻找机制很相似。当安装的第三方模块都放在项目根目录的./node modules目录下时，就没有必要按照默认的方式去一层层地寻找，可以指明存放第三方模块的绝对路径，以减少寻找。
```javascript
// 优化后配置:
module.exports = {
    resolve: {
        // 使用绝对路径指明第三方模块存放的位置,以减少搜索步骤
        modules:[path,resolve(__dirname,'node_modules')]
    }  
} 
```

##### Resolve.noParse


### 五: 使用自动刷新和开启模块热替换
借助自动化的手段,在监听到本地文件发生变化时,自动重新构建出可运行的代码后再控制浏览器刷新.
- 项目中自动刷新的配置
```javascript
module.exports = {
    devServer: {
        watchOptions:{
            // 不监听的文件或者文件夹,支持正则匹配
            ignored: /node_modules/,        // 配置一些不需要监听的文件
            // 监听到变化后等300ms再去执行
            aggregateTimeout: 300,          // 这个值越大性能越好,因为这能降低重新构建的频率
            // 默认每秒询问1000次
            poll: 1000,                     // 这个值越小越好,因为这能简单检查的频率
        }
    }  
} 
```
- 模块热替换
DevServer 还支持一种叫做模块热替换（ Hot Module Replacement ）的技术可在不刷新整个网页的情况下做到超灵敏实时预览。原理是在一个源码发生变化时，只需重新编译发生变化的模块，再用新输出的模块替换掉浏览器中对应的老模块 。模块热替换技术在很大程度上提升了开发效率和体验 。
```javascript
module.exports = {
    devServer: {
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        // 显示被替换模块的名称
        new webpack.NamedModulesPlugin(), // HMR shows correct file names
    ]
} 
```


### 六:去除console,去除注释,去除debug以及警告
```javascript
module.exports = {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
              // 是否删除注释
            comments: true,
            compress: {
                // 是否删除警告信息
                warnings: false,
                // 是否删除debugger
                drop_debugger: true,
                // 是否删除console
                drop_console: true
            }
        }),
    ]
}
```

### 七:开启gzip压缩
```javascript
// 前端:
// 1. 使用compresion-webpack-plugin插件将静态资源压缩,并生成.gz文件
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}
// 2.将nginx配置开启gzip压缩，nginx会根据配置情况对指定的类型文件,进行压缩。主要针对js与css.如果文件路径中存在与原文件同名（加了个.gz），nginx会获取gz文件，如果找不到，会主动进行gzip压缩 
```


### 八:删除打包后的.map文件
```javascript
// vue-cli@2中的config中的
build: {
   productionSourceMap: true 
}

```









### 使用webpack-bundle-analyzer进行体积分析





### webpack实现多进程打包(happypack  可以实现多进程来打包)
```javascript
let Happypack = require('happypack');
module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                use: 'Happypack/loader?id=js'
            },
            {
                test: /\.css$/,
                use: 'Happypack/loader?id=css'
            }
        ]
    },
    plugins:[
        new Happypack({
            id: 'js',
            use: [{
                loader: 'babel-loader',
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }]
        }),
        new Happypack({
            id: 'css',
            use: ['style-loader','css-loader']
        })
    ]
}
```


### webpack自带的功能



### webpack抽取公共代码


### webpack实现懒加载
```javascript

```
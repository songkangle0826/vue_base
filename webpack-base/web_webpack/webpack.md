## 1.入门(webpack配置)

新建一个项目
```javascript
npm init
```
webpack是安装在node环境中的,我们需要安装两个npm包
```javascript
npm i webpack webpack-cli -D

npm i XXX -D为npm install XXX --save-dev的缩写,是指安装模块并保存到 package.json 的 devDependencies
npm i XXX -S为npm install XXX --save的缩写
```

### 核心概念
```javascript
Entry: 入口,Webpack执行构建的第一步从Entry开始,可抽象成输入
Module: 模块,在Wbbpack里一切皆模块,一个模块对应着一个文件.Webpack会从配置的Entry开始递归找出所有依赖的模块
Chunk: 代码块,一个Chunk有多个模块组合而成,用于代码合并与分割
Loader: 模块转换器,用于把模块原内容转换成新内容
Plugin: 扩展插件,在Webpack构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要做的事情
Output: 输入结果,在Webpack经过一系列处理并得出最终想要的代码后输出结果
```
Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。 每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出。 在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。

### html-webpack-plugin
为了缓存,你在发现打包好的js文件的名称每次都一样.webpack打包出来的js文件我们需要引入到html中,但是每次我们都手动修改js文件名显的麻烦,因此我们需要一个插件来帮我们完成这件事情
```javascript
npm install html-webpack-plugin -D
 
```
通过html-webpack-plugin可以把生成的js代码以标签的形式插入到html代码中
#### 配置单文件
```javascript
plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'../public/index.html')
    })
]
```
#### 配置多文件
```javascript
{
    entry: {
        main: path.resolve(__dirname,'../src/main.js'),
        headers: path.resolve(__dirname,header.ejs')
    },
    output:{
        // filename: 'output.js',                      // 打包后的文件名称
        // path: path.resolve(__dirname,'../dist')     // 打包后的目录
        filename: '[name].[hash:8].js',                // 避免了缓存的问题
        path: path.resolve(__dirname,'../dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            filename: 'index.html', //输出的html的文件名称
            chunks: ['main']    // 与入口文件对应的模块名
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/headers.html'),
            filename: 'header.html',
            chunks: ['headers']    // 与入口文件对应的模块名
        })
    ]
}
```
关于HtmlWebpackPlugin配置的https://www.jianshu.com/p/08a60756ffda

###  clean-webpack-plugin
每次执行npm run build会发现dist文件夹会残留上次打包的文件
我们可以使用clean-webpack-plugin先清空文件夹然后再输出打包
```javascript
npm install -D clean-webpack-plugin
```
#### 配置
```javascript
plugins:[
    new CleanWebpackPlugin()
]
```


### 使用css
```javascript
css-loader: 加载.css文件
style-loader: 使用<style>将css-loader内部样式注入到我们的html页面中

npm install -D css-loader style-loader
```

#### 给css添加前缀
```javascript
npm install -D postcss-loader autoprefixer
配置
rules:
[
    {
        test: /\.css$/,
        use: ['style-loader','css-loader']      //注意从右往左解析
    },
    // 配置sass,less等
    // {
    //     test: /\.less$/,
    //     use: ['style-loader','css-loader','postcss-loader','less-loader']      //注意从右往左解析
    // },
    // 配置带有css前缀的属性
    {
        test: /\.less$/,
        use: ['style-loader','css-loader',{
            loader: 'postcss-loader',
            options:{
                plugins: [require('autoprefixer')]
            }
        },'less-loader']      //注意从右往左解析
    },
]  
```
![](https://user-gold-cdn.xitu.io/2020/1/3/16f6b64640545b0e?w=1102&h=940&f=png&s=104325)

css通过style标签的方式添加到了html文件中，但是如果样式文件很多，全部添加到html中，难免显得混乱。这时候我们想用把css拆分出来用外链的形式引入css文件怎么做呢？这时候我们就需要借助插件来帮助我们

### 拆分css 使用mini-css-extract-plugin
```javascript
npm i -D mini-css-extract-plugin
配置
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

plugins:[   
    new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].css'
    })
],
```

### 拆分多个css
```javascript
这里需要说的细一点,上面我们所用到的mini-css-extract-plugin会将所有的css样式合并为一个css文件。如果你想拆分为一一对应的多个css文件,我们需要使用到extract-text-webpack-plugin，而目前mini-css-extract-plugin还不支持此功能。我们需要安装@next版本的extract-text-webpack-plugin
npm i -D extract-text-webpack-plugin@next

配置:
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let indexLess = new ExtractTextWebpackPlugin('index.less');
let indexCss = new ExtractTextWebpackPlugin('index.css');
rules:[
    {
      test:/\.css$/,
      use: indexCss.extract({
        use: ['css-loader']
      })
    },
    {
      test:/\.less$/,
      use: indexLess.extract({
        use: ['css-loader','less-loader']
      })
    }
  ] 
```

### 处理图片,视频,音频,字体
```javascript
npm install file-loader url-loader -D

```
#### file-loader与url-loader的区别
```javascript
file-loader返回的是图片等的url
url-loader可以通过limit属性对图片分情况处理,当图片limit(单位:byte)大小时转base64,大于limit时调用file-loader对图片进行处理

相同点: 都是在webpack中处理图片,字体图标等文件
不同点: url-loader封装了file-loader,但是url-loader并不依赖file-loader

//
//
url-loader工作的两种情况:
1.文件大小小于limit参数，url-loader将会把文件转为base64；
2.文件大小大于limit，url-loader会调用file-loader进行处理，参数也会直接传给file-loader。
因此我们只需要安装url-loader即可。
```

### 用babel转义js
```javascript
npm i babel-loader @babel/preset-env @babel/core -Database
注意:
babel-loader8.x对应babel-core7.x
babel-loader 7.x 对应babel-core 6.x

配置:
rules:[
    {
        test: /\.js$/,
        use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env']
            },   
        },
        exclude: /node_modules/
    }
]
```

// babel-loader只会讲es6/7/8语法转换成es5语法,但是对于新的aoi并不会转换,例如(promise,Generator,Set/Maps)等
此时我们会借助babel-polyfill来帮助我们转换
```javascript
npm i @babel/polyfill -D

配置
const path = require('path')
module.exports = {
    entry: ["@babel/polyfill",path.resolve(__dirname,'../src/index.js')],    // 入口文件
}
```


## 解析.vue的文件
```javascript
npm i -D vue-loader vue-template-compiler vue-style-loader
```
vue-loader 用于解析.vue文件
vue-template-compiler 用于编译模板

### vue-loader
```javascript
vue-loader 的作用:
允许为vue组件的每个部分事业其他的webpack loader,例如<style>的部分事业Sass和在<Template>的部分事业Pug;
允许在一个.vue文件中事业自定快,并对其运用的loader链
使用webpack loader将<style>和<template>中引用的资源当做模块依赖来处理;
为每个组件模拟出scoped css
在开发过程中使用热重载保持状态

```


##  配置webpack-dev-server进行热更新
```javascript
npm i -D webpack-dev-server
配置如下:
const Webpack = require('webpack')
module.exports = {
  // ...省略其他配置
  devServer:{
    port:3000,
    hot:true,
    contentBase:'../dist'
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
}
```



## 区分开发环境与生产环境
实际应用到项目中，我们需要区分开发环境与生产环境，我们在原来webpack.config.js的基础上再新增两个文件

webpack.dev.js  开发环境配置文件

    开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap

webpack.prod.js 生产环境配置文件
    
    生产环境主要实现的是压缩代码,提取css,和的sourceMap.分割代码
    
    需要安装以下模块:
    
    npm i -D  webpack-merge copy-webpack-plugin optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin
    
    
    webpack-merge: 合并配置
    copy-webpack-plugin : 拷贝静态资源
    optimize-css-assets-webpack-plugin: 压缩css
    uglifyjs-webpack-plugin: 压缩js
    
    
    webpack mode 设置product的时候会自动压缩js代码,原则上不需要引入uglifyjs-webpack-plugin进行重复工作.
    但是 optimize-css-assets-webpack-plugin压缩css的同时会破坏原有js的压缩,所以我们需要引入uglifyjs进行压缩
    
    
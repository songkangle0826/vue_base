const express = require('express');
const app = new express();

const formidable = require('formidable');
const fs = require('fs');
const path = require('path');


app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

// 设置静态上传文件目录
app.use('/upload', express.static('upload'));


app.get('/',(req,res)=>{
    console.log(res,req);
    res.send({
        code: 0
    })
})


app.post('/upload',(req,res)=>{
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8'; // 编码
    // 保留扩展名
    form.keepExtensions = true;
    //文件存储路径 最后要注意加 '/' 否则会被存在public下
    form.uploadDir = path.join(__dirname, './upload/');
    // 解析 formData 数据
    form.parse(req, (err, fields ,files) => {
        if(err) return next(err);
        //借助username字段进行数据查询
        console.log(files)
    
        
        
        let username = fields.filename;
        let imgPath = files.chunk.path;
        let imgName = files.chunk.name;
        console.log(fields,imgName, imgPath);
    
    
        res.json({code: 1, data: `http://127.0.0.1:3001/upload/upload_${username}`});
        
        
    })
})



app.listen(3001,()=>{
    console.log(123,'启动了');
})
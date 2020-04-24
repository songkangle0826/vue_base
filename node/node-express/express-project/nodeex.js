const express = require('express');
const app = new express();



var superagent = require('superagent');
var charset = require('superagent-charset');
charset(superagent);

var baseUrl = 'https://www.e-tui.net/ring/index.htm?cid=555002'; //输入任何网址都可以
const cheerio = require('cheerio');

app.get('/index', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    
    req.buffer = true;
    
    
    
    
    
    
    //网页页面信息是gb2312，所以chaeset应该为.charset('gb2312')，一般网页则为utf-8,可以直接使用.charset('utf-8')
    superagent.get('https://www.e-tui.net/ring/index.htm?cid=555002')
        .charset('gb2312')
        .send({ name: 'Manny', species: 'cat'})
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .buffer(true)
        .end(function(err, sres) {
            var items = [];
            if (err) {
                console.log('ERR: ' + err);
                res.json({ code: 400, msg: err, sets: items });
                return;
            }
            var $ = cheerio.load(sres.text);
            $('div.g-main-bg ul.g-gxlist-imgbox li a').each(function(idx, element) {
                var $element = $(element);
                var $subElement = $element.find('img');
                var thumbImgSrc = $subElement.attr('src');
                items.push({
                    title: $(element).attr('title'),
                    href: $element.attr('href'),
                    thumbSrc: thumbImgSrc
                });
            });
            res.json({ code:0, msg: "", data: sres.text });
        });
});




app.listen(2000,function(){
    console.log('启动了')
})
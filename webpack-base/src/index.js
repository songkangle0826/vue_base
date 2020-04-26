let button = document.createElement('button');
button.innerHTML = '哈哈哈';

// vue的懒加载 react的懒加载
button.addEventListener('click',function(){
    console.log(11);
    // 草案中的语法  JSONP实现动态加载文件
    import('./source.js').then((data)=>{
        console.log(data.default)
    })
})

document.body.appendChild(button);




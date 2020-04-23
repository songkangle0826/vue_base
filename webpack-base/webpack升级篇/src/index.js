// import 'bootstrap'

console.log('index')


let url = '';
if(DEV==='dev'){
    url = 'http://localhost:3000'
}else{
    url = 'http://www.baidu.com'
}
console.log(DEV)



class Log {
    constructor(){
        console.log('出错了')
    }
}

let ha = new Log();


console.log(1111);


console.log(112222);



// http
// let xhr = new XMLHttpRequest();
// xhr.open('GET','/user',true)
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4  && xhr.state == 200){
//         console.log(xhr.responseText)
//     }
// }
// xhr.onload = function(){
//     console.log(xhr.response);
// }
// xhr.send()
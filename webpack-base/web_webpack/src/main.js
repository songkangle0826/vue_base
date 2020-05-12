import Vue from 'vue';
import App from './App'
import './assets/less/public.css'
import './assets/less/index.less'
//
// let a = 10;
// console.log(a);
//
//
// let fn = (a,b)=>{
//     console.log(a+b);
// }
// fn(10,20);
//
//
// let p1 = new Promise((resolve,reject)=>{
//     console.log(2222)
//     setTimeout(()=>{
//         console.log(111)
//         resolve('hahaha')
//     },200)
// });
// p1.then((res)=>{
//     console.log(res)
// })



new Vue({
    render: h=> h(App)
}).$mount('#app')


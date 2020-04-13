/*
* axios
*
* 什么是axios?
*   Axios是一个机遇Promise的HTTP,可以用在浏览器和node中
* 特性:
*   从浏览器中创建XMLHttpRequests请求
*   从node.js创建http请求
*   支持Promise API
*   拦截请求和响应
*   转换请求数据和响应数据
*   取消请求
*   自动转换JSOM数据
*   客户端支持防御XSRF
* 安装:
*   npm install axios
*
* */
// 案例

/*
* 执行GET请求
* */
axios.get('/user?ID=12345').then(function(response){}).catch(function(error){})
axios.get('/user',{ params:{ ID: 12345 } }).then(function(response){}).catch(function(error){})

/*
* 执行POST请求
* */
axios.post('/user',{Id: '123456'}).then(function(response){}).catch(function(error){})


/*
* 执行多个并发请求
* */
function getUserAccount() {
    return axios.get('/user/12345');
}
function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(), getUserPermissions()])
.then(axios.spread(function (acct, perms) {
    // 两个请求现在都执行完成
}));


// axios  API
// 可以通过向axios传递相关配置来创建请求
axios(config)
// 发送post请求
axios({
    method: 'post',
    url: '/user/12345',
    data:{
        Id: '12345'
    }
})




// 创建实例
const install  = axios.create({
    baseURL: 'https://www.baidu.com',
    timeout: 1000,
    headers: {'':""}
})


install.interceptors.request.use(function(config){
    // 在发送之前做什么
    return config
},function(error){
    // 对请求错误做什么
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function(response){
    return response
},function(error){
    return Promise.reject(error)
})


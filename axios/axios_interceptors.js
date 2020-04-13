/*
* axios拦截
* */


const axios = require('axios')

const install = axios.create({
    // baseURL: '',
    
})

axios.interceptors.request.use(function (config) {
    console.log(config.data)
    config.data.tokens = '1'
    return config
})
axios.interceptors.response.use(function (response) {
    if (response){
        response.name = '123'
    }
    console.log(response)
    return response;
})

axios({
    url: 'http://localhost:3000',
    data:{
        name: '112344567'
    }
}).then((res)=>{
    console.log(res.data);
})



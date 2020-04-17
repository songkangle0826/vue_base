const dbConfig = require('../util/dbconfig');

let getCate = (req,res)=>{
    var sql = "select * from class";
    var sqlArr = [];
    var callBack = (err,data)=>{
        if(err){
            console.log('连接出错了')
        }else{
            res.send({
                code: '0',
                list: data,
                msg: ''
            })
        }
    }
    dbConfig.sqlConnect(sql,sqlArr,callBack)
}



module.exports = {
    getCate
}
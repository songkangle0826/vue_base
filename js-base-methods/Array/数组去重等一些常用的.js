//数组去重
function unique1(list) {
    var i,j,len=list.length
    for(var i=0;i<len;i++){
        for(var j = i+1;j<len;j++){
            if(list[i] == list[j]){
                list.splice(j,1)
                len--;
                j--;
            }
            
        }
    }
    return list
}
console.log(unique1([1,2,2,2,2,4,3,3,4]))

//双循环去重法
function unique2(list) {
    var result = [];
    for(var i=0;i<list.length;i++){
        for(var j=i+1;j<list.length;j++){
            if(list[i]===list[j]){
                j= ++i
            }
        }
        result.push(list[i])
    }
    return result
}
console.log(unique2([1,2,2,2,2,4,3,3,4]))


// 利用对象键值对去重
function unique3(list) {
    var result = {};
    var r = []
    for(var i=0;i<list.length;i++){
        if(result.hasOwnProperty(list[i])){
        
        }else{
            result[list[i]] = [];
            r.push(list[i])
        }
    }
    return r
}
console.log(unique3([1,2,2,2,2,4,3,3,4]))

//sort思想
function unique4(list) {
    list.sort(function(a,b){
        return a-b
    })
    for(var i=0;i<list.length;i++){
        if(list[i]===list[i+1]){
            list.splice(i,1)
            i--
        }
    }
    return list
}
console.log(unique4([1,2,2,2,2,4,3,3,4]))



//利用indexOf以及forEach
function unique5(list) {
    var result = [];
    list.forEach(function(item,index){
        if(result.indexOf(item)<0){
            result.push(item)
        }
    })
    return result
}
console.log(unique5([1,2,2,2,2,4,3,3,4]))


// 利用Set数据结构
function unique6(list){
    return Array.from(new Set(list))
}
console.log(unique6([1,2,2,2,2,4,3,3,4]))





// 字符串反转
function reserve(str){
    // 1
    var len = str.length;
    var str1 = ""
    for(var i=len;i>=0;i--){
        str1 += str.charAt(i)
    }
    return str1
    // 2
    // return str.split("").reverse().join("")
}
console.log(reserve("hello world!"))






//b实现⼀个函数, 将下⾯的数组转换成树状结构
function listToTree(list) {
    if(list.length==0){
        return
    }
    var x = {};
    list.forEach(function(item,index){
        if(x.hasOwnProperty(item.parent)){
            x[item.parent].push({
                id: item.id,
                name: item.name
            })
        }else{
            x[item.parent] = [{
                id: item.id,
                name: item.name
            }]
        }
    })
    return x
}
var list = [
    {id: 2, name: 'declare', parent: 0},
    {id: 3, name: 'gps', parent: 0},
    {id: 4, name: 'gui', parent: 1},
    {id: 5, name: 'http', parent: 1},
    {id: 0, name: 'api', parent: null},
    {id: 1, name: 'fetch', parent: null},
    {id: 6, name: 'lcd', parent: 1},
    {id: 31, name: 'led', parent: 3},
    {id: 32, name: 'mips', parent: 3},
    {id: 33, name: 'dram', parent: 3},
    {id: 41, name: 'dns', parent: 31},
    {id: 42, name: 'cros', parent: 31},
];
console.log(listToTree(list).null)
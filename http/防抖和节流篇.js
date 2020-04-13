/*
* 防抖: 核心思想: 每次时间触发删除原来的定时器,建立新的定时器.. (跟王者荣耀回城功能类似,你反复触发回城功能,那么只认最后一次,从最后一次触发倒计时)
* */
function debounce(fn,delay){
    let timer = null;
    return function(...args){
        let context = this;
        if(timer) clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,args)
        },delay);
    }
}

/*
* 节流: 核心思想: 如果在定时器的时间范围内再次触发,不予理睬,等当前定时器完成,才能启动下一个定时器任务.. (好比坐公交,10分钟一趟,10分钟内有多少人在公交站等我不管,10分钟一到我就走)
* */
function throttle(fn,interval){
    let flag = true;
    return function(...args){
        if(!falg) return;
        let context = this;
        flag = false;
        setTimeout(function(){
            fn.apply(context,args)
            flag = true;
        },interval)
    }
}
/*
* 类型保护
* */

namespace a{

    function double(input:string|number|boolean){
        if(typeof input == 'string'){
            // input.
        }else if(typeof input == 'number'){
            // input.
        }else{

        }
    }

    class Animal{
        public name:string = '哈哈哈';
    }
    class Bird extends Animal{
        public swing: number = 2
    }
    function getName(a:Animal){
        if(a instanceof Bird){
            a.swing
        }else{
            a.name
        }
    }
}

// null保护
function getFirstLetter(s: string | null){
    if(s === null){
        s = ''
    }
    /*
        function ensure(){
            s = s || '';
        }
        ensure()
        return s!.charAt(0)     // 非空断言
     */
}

namespace b{
    let a = {b:1};
    // 先判断a是否为null或者undefined,如果不为null绘制undefiend,返回a.b的值
    // console.log(a?.b);
}



// 通过相同的字段判断不同的类型
interface WarningButton{
    class: 'warning',       // 字面量也是类型
    text1: '修改'
}

interface DangerButton{
    class: 'danger',
    text2: '删除'
}
type Button = WarningButton | DangerButton;
function getButton(button: Button){
    if(button.class == 'warning'){
        button.text1
    }else{
        button.text2
    }
}

// 通过有木有属性去判断
interface Bird{
    swing: number
}
interface Dog{
    leg: number
}
function getNumber(x:Bird|Dog){
    if('swing' in x){
        x.swing
    }else{
        x.leg
    }
}


namespace d{
    // 自定义的类型保护
    interface Bird{
        name: 'Bird'
        legs: number
    }
    interface Dog{
        name: 'Dog'
        legs: number
    }
    function isBird(x:Bird|Dog): x is Bird{
        return x.legs === 2;
    }
    function getAnimal(x:Bird|Dog){
        if(isBird(x)){
            x.name
        }else{
            x.name
        }
    }
    let x: Bird = { name: 'Bird',legs:2 }
    getAnimal(x)
}


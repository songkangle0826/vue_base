// 观察一个数据Vue2.0 defineProperty


// 只针对对象   数组没有使用definePropety的


let arrayProto = Array.prototype;  //数组原型上的方法
let proto = Object.create(arrayProto); // Object.create()  // 创建新的原型对象


console.log(arrayProto == proto)

['push','unshift','splice','reverse','sort','shift','pop'].forEach(method=>{
	proto[method] = function(...args){   // 这个数组应该也被监控一下
		console.log(arguments)
		// Array.prototype.push.call([1,2,3])
		console.log('视图更新了')

		let inserted;
		switch(method){
			case 'push':
			case 'unshift':
				inserted = args;
				break;
			case 'splice':   // 数组的splice  只有传递三个参数,才有追加效果
				inserted = args.slice(2);
				break;
			default:
				break;
		}
		ArrayObserver(inserted)
		arrayProto[method].call(this,...args)
	}
})


// 对数组的更新 
function ArrayObserver(obj){
	for(let i = 0; i<obj.length;i++){
		let item = obj[i];
		// 如果是普通值,就不需要监控了
		observer(item)   // 如果是对象会被defineReactive
	}
}


function observer(obj){
	if(typeof obj !== 'object' || obj == null) {
		return obj
	}

	// 这里处理的是数组
	if(Array.isArray(obj)){
		// 给数组增加 push shift splice(如果调用者三个方法)应该把这个值判断一下是否是对象
		Object.setPrototypeOf(obj,proto);	// 实现一个对数组的方法进行重写
		// for(let i = 0; i<obj.length;i++){
		// 	let item = obj[i];
		// 	observer(item)   // 如果是对象会被defineReactive
		// }
		ArrayObserver(obj)

	}else{
		// 这里是处理对象的
		for(let key in obj){
			// 默认只循环第一层
			defineReactive(obj,key,obj[key])
		}
	}
}


// 对数据添加Object.defineProperty
function defineReactive(obj,key,value){
	observer(value)		// 递归创建响应式数据,性能不好
	Object.defineProperty(obj,key,{
		get(){
			return value;
		},
		set(newValue){	// 给某个key设置值的时候,可能也是一个对象
			observer(newValue)		// data.name.n = 'zf';
			if(value!== newValue){
				value = newValue
				console.log("视图更新了")
			}
		}
	})
}


// 对象
// let data = {name: { n: 'zf' }};
// observer(data)

// console.log(data.name.n)
// data.name.n = "哈哈哈";
// console.log(data.name.n)

// data.name = {n:"jw"}
// data.name.n = 'zf';



// 数组
let data = { name: [{ n: 100},2]};
observer(data)
// data.name[0].n = 200
// data.name[1] = 200
data.name.push({name: 'zf'})
console.log(data.name)




/*
 * 特点:
 * 1.使用对象的时候,必须先声明属性,这个属性才是响应式的
 * 2.
*/
/*
 * vue的缺点
 * 1.增加不存在的属性,不能更新视图. (Vm.$set)   // data.a = '111';
 * 2.vue默认会递归所有数据,如果data数据对象层次很深,会响应性能,每一个值上都增加了Object.defineProperty()中的get和set方法
 * 3.如果对象中的属性值为数组,数组里套对象是支持响应式变化的,如果是向量则没有效果. 
 * 4.修改数组长度和索引是不会导致视图更新的
 * 5.如果新增的数据vue中也会监控(数据是对象类型的)
*/ 




function Vue(options = {}){
	this.$options = options; // 将所有属性挂载到了$options;
	// this._data
	var data = this._data = this.$options.data;
	observe(data);
	for(let key in data){
		Object.defineProperty(this,key,{
			enumerable: true,
			get(){
				return this._data[key];  //this.a = { a: 1 }
			},
			set(newVal){
				this._data[key] = newVal;
			}
		})
	}
}

// vm.$options

// 观察对象的时候给对象增加Object.defineProperty
function Observe(data){ //这里写我们的主要逻辑
	for(let key in data){ // 把data属性通过object.defineProperty的方式 定义
		let val = data[key];
		observe(val)
		Object.defineProperty(data,key,{
			enumerable: true,
			get(){
				return val
			},
			set(newVal){  // 更改值的时候
				if(newVal === val) return;  // 设置的值和以前是一样的东西
				val = newVal;  // 如果以后再获取的时候将刚才的值丢回去
				observe(newVal)
			}
		})
	}
}

// 观察对象给对象增加Object.DefineProperty
function observe(data){
	if(data !== 'object') return;
	return new Observe(data)
}
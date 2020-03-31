/*
 * vue 中的 mixins(混入)
 * 混入(mixins)是一只能怪分发Vue组件中可复用的非常灵魂的方式.混入对象可以包含任意组件选项.当组件使用混入对象时,所有混入对象的选项将被混入还组件本身的选项
 	
 	选项合并
 		当组件和混入对象含有同名选项时,这些选项将已恰当的方式混合
 			比如:数据对象在内部会进行递归合并,在和组件的数据发生冲突时以组件数据优先
*/




/*
	// 定义一个混入对象
	var myMixin = {
		created: function () {
			this.hello()
		},
		methods: {
			hello: function(){
				console.log('hello from mixin!')
			}
		}
	}

	// 定义一个使用混入对象的组件
	var Component = Vue.extend({
		mixins: [myMixin]
	})

	var component = new Component();
*/

/*
	//选项合并
	var mixin = {
		data: function () {
			return {
				message: 'hello',
				foo: 'abc'
			}
		}
	}

	var vm = new Vue({
		mixins: [mixin],
		data:function(){
			return{
				message: 'googbye',
				bar: 'def'	
			}
		},
		created: function(){
			console.log(this.$data)  //bar: "def" foo: "abc" message: "googbye"
		}
	})
*/

// 同名钩子函数将混合为一个数组,因此都将被调用.另外,混入对象的钩子将在组件自身钩子之前调用
var mixin = {
	data: function(){
		return{
			morning: [],
			noon: [],
			night: [],
			checkedCities1: ['上海', '北京'],
			cities: ['上海', '北京', '广州', '深圳']
		}
	},
	created: function(){
		console.log("混入对象的钩子被调用")
	},
	methods: {
		foo: function () {
			console.log('foo')
		},
		conflcting: function () {
			console.log('from mixin')
		}
	}
}

var vm = new Vue({
	mixins: [mixin],
	created: function(){
		console.log('组件钩子被调用')
	},
	methods: {
		bar: function () {
			console.log('bar')
		},
		conflcting: function () {
			console.log('from self')
		}
	}
})

//  混入对象的钩子被调用
//  组件钩子被调用

// vm.foo();  //=> 'foo'
// vw.bar();  //=> 'bar'
// vm.conflcting() //=> 'from self'














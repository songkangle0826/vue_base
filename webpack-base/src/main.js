import Vue from  'vue';
import App from './App.vue'

import ABB from './reactA'

import React from 'react'
import ReactDOM from 'react-dom'
const common = require('./common.js')

require('./index.css')

require('./about.less')

console.log('main');

new Vue({
    el:'#app',
    render: (h)=>h(App)
})

ReactDOM.render(<div>
    <ABB/>
    <span>这里是react语法</span>
</div>,document.querySelector('#abb'))



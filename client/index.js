import Vue from 'vue'
import Main from './pages/Main.vue'

const app = new Vue({
    el: '#app',
    render: createElement => createElement(Main)
})
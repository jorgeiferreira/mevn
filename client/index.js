import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from '@pages/Main.vue'
import TextInput from '@components/TextInput.vue'
import store from '@store'
import validation from './validation'


Vue.component('text-input',TextInput)
Vue.use(Router)

const app = new Vue({
    el: '#app',
    router,
    store,
    validation,
    render: createElement => createElement(Main)
})
import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from '@pages/Main.vue'
import TextInput from '@components/TextInput.vue'
import Button from '@components/Button.vue'
import Loader from '@components/Loader.vue'
import store from '@store'
import validation from '@client/validation'
import authMixin from '@client/mixins/auth'


Vue.component('text-input',TextInput)
Vue.component('btn',Button)
Vue.component('loader',Loader)
Vue.use(Router)
Vue.mixin(authMixin)

const app = new Vue({
    el: '#app',
    router,
    store,
    validation,
    render: createElement => createElement(Main)
})
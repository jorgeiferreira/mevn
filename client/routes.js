import Router from 'vue-router'
import Login from '@pages/Login.vue'
import ForgotPassword from '@pages/ForgotPassword.vue'
import Register from '@pages/Register.vue'
import Home from '@pages/Home.vue'

export default new Router({
    node:'history',
    routes:[
        {
            path:'/auth/login',
            component: Login
        },
        {
            path:'/auth/register',
            component: Register
        },
        {
            path:'/auth/passwords/email',
            component: ForgotPassword
        },
        {
            path:'/',
            component: Home
        },
    ]
})
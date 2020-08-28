import Router from 'vue-router'
import Login from '@pages/Login.vue'
import ForgotPassword from '@pages/ForgotPassword.vue'
import ResetPassword from '@pages/ResetPassword.vue'
import Register from '@pages/Register.vue'
import EmailConfirm from '@pages/EmailConfirm.vue'
import Home from '@pages/Home.vue'

export default new Router({
    node:'history',
    routes:[
        {
            path:'/',
            component: Home
        },
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
            path:'/auth/passwords/reset/:token',
            component: ResetPassword
        },
        {
            path:'/auth/emails/confirm/:token',
            component: EmailConfirm
        },

    ]
})
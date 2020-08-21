import Vue from 'vue'
import './styles/main.css'
import router from './routes'
import Router from 'vue-router'
import Main from '@pages/Main.vue'

import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

import TextInput from '@components/TextInput.vue'

Vue.use(Router)


Vue.component('text-input',TextInput)
Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver )


// Add the required rule
extend('required', {
    ...required,
    message: 'This field is required'
  });
   
  // Add the email rule
  extend('email', {
    ...email,
    message: 'This field must be a valid email'
  });

const app = new Vue({
    el: '#app',
    router,
    render: createElement => createElement(Main)
})
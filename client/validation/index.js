import Vue from 'vue'

import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

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


export default{

}
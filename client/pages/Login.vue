<template>
    <div class="container my-16 w-full mx-auto">
        <ValidationObserver ref="validationObserver" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(signIn)">
                <div class="max-w-sm mx-auto">
                    <h3 class="text-center text-gold text-3xl">Login</h3>  
                    <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
                        <text-input name="email" rules="required|email" v-model="model.email" placeholder="Your email"></text-input>
                        <text-input name="password" rules="required" v-model="model.password" placeholder="Your password" type="password"></text-input>
                        
                        <div class="my-5 flex justify-center items-center">
                            <router-link to="/auth/passwords/email" class="no-underline text-brown">Forgot Password?</router-link>
                        </div>
                        
                        <btn
                            label='Sign in'
                            :disabled="loading"
                            :loading="loading"
                        />
                    </div> 
                </div> 
            </form>
        </ValidationObserver>
      

       
    </div>
</template>

<script>
import formMixin from '@client/mixins/form'
import {POST_LOGIN} from '@store/auth/actions'

export default {
    mixins:[formMixin],
    data:()=>({
        model:{
          email:"",  
          password:"",  
        }
    }),
    methods:{
        signIn() {
            this.toggleLoading()
            this.$store.dispatch(POST_LOGIN, this.model)
                .then(response=>{
                    this.toggleLoading()
                    this.setAuth(response.data)
                    
                })
                .catch(error=>{
                    this.toggleLoading()
                    this.$refs.validationObserver.setErrors(error.response.data)
                })
        }
    }
}
</script>
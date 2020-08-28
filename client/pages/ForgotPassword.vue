<template>
    <div class="container my-16 w-full mx-auto">
        <ValidationObserver ref="validationObserver" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(forgotPassword)">
                <div class="max-w-sm mx-auto">
                    <h3 class="text-center text-gold text-3xl">Forgot Password</h3>  
                    <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
                        <text-input name="email" rules="required|email" v-model="model.email" placeholder="Your email"></text-input>
                        <btn
                            label='Please send me a reset link'
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
import {POST_FORGOT_PASSWORD} from '@store/auth/actions'

export default {
    mixins:[formMixin],
    data:()=>({
        model:{
          password:"",  
        }
    }),
    methods:{
        forgotPassword() {
            this.toggleLoading()
            this.$store.dispatch(POST_FORGOT_PASSWORD, this.model)
                .then(response=>{
                    this.toggleLoading()
                    this.$router.push("/")
                    
                })
                .catch(error=>{
                    this.toggleLoading()
                    this.$refs.validationObserver.setErrors(error.response.data)
                })
        }
    }
}
</script>
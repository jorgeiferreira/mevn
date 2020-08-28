<template>
    <div class="container my-16 w-full mx-auto">
        <ValidationObserver ref="validationObserver" v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(resetPassword)">
                <div class="max-w-sm mx-auto">
                    <h3 class="text-center text-gold text-3xl">Reset your password</h3>  
                    <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
                        <text-input name="password" rules="required" v-model="model.password" placeholder="New password" type="password"></text-input>
        
                        <btn
                            label='Reset Password'
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
import {POST_RESET_PASSWORD} from '@store/auth/actions'

export default {
    mixins:[formMixin],
    data:()=>({
        model:{
          password:"",  
        }
    }),
    methods:{
        resetPassword() {
            this.toggleLoading()
            this.$store.dispatch(POST_RESET_PASSWORD, {
                ...this.model,
                token: this.$route.params.token
                })
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
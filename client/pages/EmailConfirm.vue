<template>
    <div>
        <h1 class="text-center my-16 text-brown">Confirming email ... </h1>

    </div>
</template>

<script>
    import {POST_CONFIRM_EMAIL} from '@store/auth/actions'

    export default {
        mounted(){
            this.$store.dispatch(POST_CONFIRM_EMAIL,{
                token: this.$route.params.token
            }).then(response=>{
                this.setAuth(response.data)
            }).catch(()=>{
                this.$router.push('/')
            })
        }
    }
</script>
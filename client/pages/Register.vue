<template>
    <div class="container my-16 w-full mx-auto">
        <div class="max-w-sm mx-auto">
            <h3 class="text-center text-gold text-3xl">Register</h3>  
            <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
                <text-input v-model="model.name" placeholder="Your names"></text-input>
                <text-input v-model="model.email" placeholder="Your email"></text-input>
                <text-input v-model="model.password" placeholder="Your password" type="password"></text-input>
                <button class="w-full mt-3 py-4 bg-emerald text-white rounded-sm focus:outline-none hover:bg-emerald-light">Sign Up</button>
            </div> 
        </div> 
    </div>
</template>

<script>
export default {
    data:()=>({
        model:{
          name:"",  
          email:"",  
          password:"",  
        }
    })
}
</script>
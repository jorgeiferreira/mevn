<template>
    <div>
        <ValidationProvider
        :name="name"
        :rules="rules"
        v-slot="v">
            <input 
                :name="name"
                :type="type"
                :value="value" 
                @input="$emit('input', $event.target.value)"
                class="text-sm w-full bg-brown-lightest p-3 focus:outline-none text-brown mb-3" 
                :placeholder="placeholder">
            <span class="text-red">{{ v.errors[0] }}</span>
        </ValidationProvider>

     
    
    </div>
</template>
<script>
export default {
    props:{
        placeholder:{
            type:String,
            require:true,
        },
        type:{
            type:String,
            require:false,
            default:'text'
        },
        value: {
            type: String,
            required:false,
            default:''
        },
        name: {
            type: String,
            required:true
        },
        rules: {
            type: String,
            required:true
        }        
    }
}
</script>
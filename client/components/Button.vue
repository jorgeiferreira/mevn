<template>
    <div>
        <button 
            :disabled="disabled"
            @click="$emit('click')"
            :class="{'bg-emerald': !loading, 'bg-emerald-light cursor-not-allowed': loading }"
            class="w-full mt-3 py-4 text-white rounded-sm focus:outline-none hover:bg-emerald-light">

            <loader v-if="loading" class="text-center" />

            <span v-else>{{label}}</span>
            
        </button>
    </div>
</template>

<script>
export default {
    props:{
        disabled:{
            type:Boolean,
            required: false,
            default: false
        },
        label:{
            type:String,
            required: true
        },
        loading:{
            type:Boolean,
            required: false,
            default: false
        }
    }
}
</script>
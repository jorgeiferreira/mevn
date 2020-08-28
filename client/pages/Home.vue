<template>
    <div class="my-32">
        <h1 class="text-center text-brown" v-if="!auth">
            Testing Mevn app
        </h1>         
        <h1 class="text-center text-brown" v-else>
            Hello there {{user.name}}
        </h1>   
    </div>
</template>

<template>
    <div>
        <div class="h-2 w-full bg-gold-light"></div>
        <div class="w-full h-12 flex items-center justify-between px-6" >
            <router-link to="/" class="no-underline text-gold">Mevn </router-link> 
            <div v-if="!auth">
                <router-link class="no-underline text-brown" to="/auth/login">Sign in</router-link>
                <router-link class="no-underline text-brown border-2 px-3 py-2 hover:text-brown-darkest rounded-full border-brown ml-3" to="/auth/register">Join now</router-link>
            </div>
            <div v-else>
                <span class="cursor-pointer text-brown hover:text-brown-darkest" @click="unsetAuth">Logout</span>
            </div>
        </div>
     
        <router-view></router-view>
    </div>
</temph1te>
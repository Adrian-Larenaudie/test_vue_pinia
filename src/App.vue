<template>
    <StarWarsSvgLogo />
    <WelcomeMsg  msg="Star Wars front vue App with Pinia"/>
    <RouterView v-if="!isLoading"/>
    <LoaderSpinner v-if="isLoading"/>
    <LogoutButton v-if="isLogged"/>
</template>

<script>
import WelcomeMsg from './components/WelcomeMsg.vue';
import StarWarsSvgLogo from './components/StarWarsSvgLogo.vue';
import LoaderSpinner from './components/LoaderSpinner.vue';
import LogoutButton from './components/LogoutButton.vue';
import { useAuthStore } from './stores/authStore.js';

export default {
    name: 'App',
    components: {
        WelcomeMsg,
        StarWarsSvgLogo,
        LoaderSpinner,
        LogoutButton
    },
    computed: {
        isLoading() {
            const loaderArray = [];
            const authStore = useAuthStore(); 
            const isLoading = authStore.getIsLoading;
            loaderArray.push(isLoading);
            for (let index = 0; index < loaderArray.length; index++) {
                if(loaderArray[index]) {
                    return true;
                }              
            }
            return false;
        },
        isLogged() {
            const authStore = useAuthStore();
            return authStore.getIsLogged;
        }
    },
    mounted() {
        const authStore = useAuthStore();
        authStore.setIslogged();
    },
    methods: {
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

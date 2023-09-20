<template>
    <div>
        <button class="logoutButton" @click="logoutEvent">logout</button>
    </div> 
 </template>
 
 <script>
import router from '@/router/index.js';
 import Loader from 'vue-spinner/src/ClipLoader.vue';
 import { useAuthStore } from "../stores/authStore.js";

 export default {
     name: 'LogoutButton',
     components: {
         Loader,
     },
     methods: {
        logoutEvent(event) {
            const authStore = useAuthStore();
            authStore.logoutAction();
            router.push("/login");
        },
     }
 }
 </script>
 
 <style>
 .logoutButton {
    cursor: pointer;
    margin: .5rem 0;
    border: solid 2px #00303f;
    border-radius: .2rem;
    padding: .3rem .8rem;
    font-size: 1rem;
    font-family: 'Clowey', sans-serif;
    font-weight: 600;
    height: 42px;
    margin-left: 1rem;
    background-color: #e14e5c;
    color: #fff;
    width: fit-content;
    min-width: 150px;
    align-self: flex-end;
    transition: .4s;
 }
 </style>
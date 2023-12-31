import { defineStore } from "pinia";
import { authService } from "../services/auth.js";
import Axios from 'axios';

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isLogged: false,
        isLoading: false,
        errorMessage: "", 
        email: "",
        password: "", 
    }),
    getters: {
        getIsLogged: (state) => {
            return state.isLogged;
        },
        getIsLoading: (state) => {
            return state.isLoading;
        },
        getErrorMessage: (state) => {
            return state.errorMessage;
        },
        getEmail: (state) => {
            return state.email;
        },
        getPassword: (state) => {
            return state.password;
        },
    },
    actions: {
        async loginAction() {
            try {
                this.toggleIsLoadingValue();
                const response = await Axios.post("http://localhost:5050/api/auth/login", { email: this.email, password: this.password });
                if(response.status === 200) {
                    localStorage.setItem("access_token", response.data.token);    
                }
                this.setIslogged();
                this.setEmailValue("");
                this.setPasswordValue("");
                this.setErrorMessageValue("");
            } catch (error) {
                console.log(error);
                this.setErrorMessageValue("Bad credentials !");
            } finally {
                this.toggleIsLoadingValue();
            }
        },
        logoutAction() {
            authService.logout();
            this.setIslogged();
        },
        setEmailValue(newEmailValue) {
            this.email = newEmailValue;
        },
        setPasswordValue(newPasswordValue) {
            this.password = newPasswordValue;
        },
        setErrorMessageValue(errorMessageValue) {
            this.errorMessage = errorMessageValue;
        },
        toggleIsLoadingValue() {
            this.isLoading = ! this.isLoading;
        },
        setIslogged() {
            this.isLogged = authService.isLogged();
        },
    }
});
<script setup>
    import {ref,onMounted} from 'vue'
    import { useAuthStore } from '@/stores/auth'
    
    const authStore = useAuthStore()
    // setup
    
    const username = ref('')
    const email = ref('')
    const password = ref('')

</script>
<template lang="">
    <div class="col-md-6 login_form py-4">
        <div class="text-center">
            <h1 class="fw-bold text-dark">Register</h1>
            <p>Create your new account</p>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <form class="p-3">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <small>By signing up you agree to our Terms & Conditions and Privacy Policy</small>
                    </div>
                    <div class="d-grid mb-4">
                        <button type="button" class="btn btn-primary login_btn" @click="authStore.register({username,email,password})">Sign up</button>
                    </div>
                    
                    <div class="text-center">Already have an Account? <router-link to="/login">Login</router-link></div>
                </form>        
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>
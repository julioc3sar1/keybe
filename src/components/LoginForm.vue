<script setup>
    import {ref,onMounted} from 'vue'
    import { useAuthStore } from '@/stores/auth'
    
    const authStore = useAuthStore()
    // setup
    
    const email = ref('eve.holt@reqres.in')
    const password = ref('cityslicka')
</script>
<template lang="">
    <div class="col-md-6 login_form py-4">
        <div class="text-center">
            <h1 class="fw-bold text-dark">Welcome back</h1>
            <p>Login to your account</p>
        </div>
        <div class="row">
            <div class="col-12 col-md-8 offset-md-2">
                <form class="p-3">
                    <div class="mb-3">
                        <input type="email" class="form-control" id="email" placeholder="Email" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <router-link to="" class="text-decoration-none">Forgot Password?</router-link>
                    </div>
                    <div class="d-grid">
                        <button type="button" class="btn btn-primary login_btn" @click="authStore.login({email,password})">Log In</button>
                    </div>
                </form>        
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>
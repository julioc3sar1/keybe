<script setup>
    import {ref,onMounted} from 'vue'
    import { useAuthStore } from '@/stores/auth'
    
    const authStore = useAuthStore()
    // setup
    
    const email = ref('eve.holt@reqres.in')
    const password = ref('cityslicka')
    
</script>
<template>
    <div class="login">
        <div class="container-fluid h-100">
            <div class="row h-100 align-items-md-center">
                <div class="col-md-6 login_bg">
                    <!-- <img src="" alt=""> -->
                </div>
                <div class="col-md-6 login_form py-4">
                    <div class="text-center">
                        <h1 class="fw-bold text-dark">Welcome back</h1>
                        <p>Login to your account</p>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-8 offset-md-2">
                            <form class="p-3">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
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
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login{
    height: 100vh;
    &_bg{
        height: 200px;
        background-image: url('https://images.unsplash.com/photo-1619241638225-14d56e47ae64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    &_form{
        height: calc(100% - 200px);
        .login_btn{
            color: white;
            font-weight: bold;
            font-size: 20px;
            border: 0;
            height: 50px;
            border-radius: 15px;
            background: linear-gradient(91.47deg, #FFC52A 0.58%, #F79515 95.65%);
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
    }
}
@media (min-width: 992px) {
    .login{
        &_bg{
            height: inherit;
        }
        &_form{
            height: auto;
        }
    }
    
}

</style>
<script setup>
    import {ref,onMounted} from 'vue'
    import { useUsersStore } from '@/stores/users'
    
    const usersStore = useUsersStore()
    
    const email = ref('eve.holt@reqres.in')
    const password = ref('cityslicka')
    
</script>
<template>
    <div class="login">
        <div class="container-fluid h-100">
            <div class="row h-100 align-items-md-center">
                <div class="col-md-6 login_bg">
                    <img src="" alt="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ea debitis iusto nemo eligendi accusamus sapiente quisquam fugit, architecto consequuntur alias, illum quos fugiat cupiditate aspernatur eum quod ex facilis.
                </div>
                <div class="col-md-6 login_form">
                    <form class="px-3">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="d-grid">
                            <button type="button" class="btn btn-primary" @click="authStore.login({email,password})">Submit</button>
                        </div>
                    </form>        
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login{
    height: 100vh;
    &_bg{
        max-height: 200px;
    }
    &_form{
        height: calc(100% - 200px);
    }
}
@media (min-width: 992px) {
    .login{
        &_bg{
            max-height: inherit;
        }
        &_form{
            height: auto;
        }
    }
    
}

</style>
<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg bg-white shadow-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../assets/img/logo.svg" width="150" alt="">
                </a>
                <button class="navbar-toggler border-0 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/crear" class="nav-link">Create user</router-link>
                        <!-- <a class="nav-link" href="#">Create user</a> -->
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="mailto:julioc3sarr1@gmail.com">Hire me!</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar-user d-flex align-items-center">
                    <Avatar image-url="https://reqres.in/img/faces/1-image.jpg" class="me-3"/>
                    <div class="d-flex flex-column">
                        <div class="navbar-user__name d-none d-lg-block">Julio Valderrama</div>                        
                        <small class="navbar-user__email d-none d-lg-block">julioc3sarr1@gmail.com</small>                        
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
import Avatar from './Avatar.vue';
</script>
<style lang="scss">
    a.active{
        color: #F79515 !important;
    }
</style>
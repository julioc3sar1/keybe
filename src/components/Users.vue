<script setup>
    import {ref,onMounted} from 'vue'
    import { useUsersStore } from '@/stores/users'
    import Avatar from './Avatar.vue';
    
    const usersStore = useUsersStore()
    
    onMounted(() => {
        usersStore.getUsers()
        // console.log(usersStore.users)
    })
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <!-- <th scope="col"></th> -->
                                <th scope="col" class="fw-bold">First name</th>
                                <th scope="col" class="fw-bold">Last name</th>
                                <th scope="col" class="fw-bold">Email</th>
                                <th scope="col" class="fw-bold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user,index) in usersStore.users">
                                <!-- <th scope="row">{{index+1}}</th> -->
                                <td>
                                    <span class="column_name">Name</span>
                                    <div class="d-flex align-items-center">
                                        <Avatar :image-url="user.avatar" class="me-3"/>                                    
                                        {{user.first_name}}
                                    </div>
                                </td>
                                <td>
                                    <span class="column_name">Last Name</span>
                                    {{user.last_name}}
                                </td>
                                <td>
                                    <span class="column_name">
                                        Email
                                    </span>
                                    {{user.email}}
                                </td>
                                <td>
                                    <div class="actions d-flex">
                                        <button class="btn"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn"><i class="bi bi-trash3"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>
<script setup>
    import {ref,onMounted} from 'vue'
    import { useUsersStore } from '@/stores/users'
    
    const usersStore = useUsersStore()
    
    onMounted(() => {
        usersStore.getUsers()
        // console.log(usersStore.users)
    })
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">First name</th>
                                <th scope="col">Last name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user,index) in usersStore.users">
                                <th scope="row">{{index+1}}</th>
                                <td>{{user.first_name}}</td>
                                <td>{{user.last_name}}</td>
                                <td>{{user.email}}</td>
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
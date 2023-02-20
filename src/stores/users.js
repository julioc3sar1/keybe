import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('users', () => {
    const users = ref([])

    function getUsers() {
      users.value = []
      axios.get('https://reqres.in/api/users',{
        headers: {'Authorization': localStorage.getItem('auth_token')},
      })
      .then(function (response) {
        console.log(response.data.data);
        users.value = [...users.value, ...response.data.data]
        console.log(users.value)
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    function createUser(){
      
    }

    return {users, getUsers}
})

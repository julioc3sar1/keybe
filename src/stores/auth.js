import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const useAuthStore = defineStore('auth', () => {
  let authenticated = ref(false)
    function login(user) {
      axios.post('https://reqres.in/api/login', user)
      .then(function (response) {
        console.log(response);
        authenticated = false
        localStorage.setItem('auth_token',response.data.token)
        router.push('/users')
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    return {authenticated, login}
})

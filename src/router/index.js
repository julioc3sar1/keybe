import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name:'users'},
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: (to, from) => {
        // reject the navigation
        if(localStorage.getItem('auth_token') && to.name !== 'login'){
          // console.log('algo')
          // return { name: 'users' }
          return true
        }else{
          console.log('algo mas')
          return { name: 'login' }
        }
      },
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('../components/Users.vue'),
        },
        {
          path: 'users/new',
          name: 'newUser',
          component: () => import('../components/NewUser.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router

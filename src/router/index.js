import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name:'users'},
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: (to, from) => {
        if(localStorage.getItem('auth_token') && to.name !== 'login'){
          return true
        }else{
          return { name: 'login' }
        }
      },
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('../components/Users.vue'),
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: (to, from) => {
        if(localStorage.getItem('auth_token')){
          return { name: 'users' }
        }
      },
    },
    {
      path: '/crear',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ]
})

export default router

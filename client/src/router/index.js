import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.acces_token && to.name === "Home" ) {
       next({ name: 'Login' })
  }
  else if(localStorage.acces_token && to.name === "Login"){
   next({ name: 'Home' })
  }
  else{
    next()
  }
})


export default router

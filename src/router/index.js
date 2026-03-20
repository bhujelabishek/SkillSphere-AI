import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
// import LoginView from '../views/LoginView.vue'


const routes = [
    { path: '', component: HomeView },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path:'/signup', component: SignUp }
//   { path: '/login', component: LoginView }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router


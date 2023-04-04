import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import NadaOne from '../components/home/NadaOne.vue'
import NadaTwo from '../components/home/NadaTwo.vue'
import NadaThree from '../components/home/NadaThree.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/NadaOne',
    component: NadaOne
  },
  {
    path: '/NadaTwo',
    component: NadaTwo
  },  {
    path: '/NadaThree',
    component: NadaThree
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

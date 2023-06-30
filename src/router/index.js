import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AsistentesView from '../views/Asistentes/View.vue'
import AsistentesCreate from '../views/Asistentes/Create.vue'
import AsistentesEdit from '../views/Asistentes/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/asistentes',
      name: 'asistenes',
      component: AsistentesView
    },
    {
      path: '/asistentes/create',
      name: 'asistenesCreate',
      component: AsistentesCreate
    },
    {
      path: '/asistentes/:id/edit',
      name: 'asistenesEdit',
      component: AsistentesEdit
    },
    
  ]
})

export default router

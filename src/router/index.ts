import ClientsManagmentView from '@/views/ClientsManagmentView.vue'
import HomeDashboardView from '@/views/HomeDashboardView.vue'
import SellsManagmentView from '@/views/SellsManagmentView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeDashboardView },
    { path: '/clients', component: ClientsManagmentView },
    { path: '/sells', component: SellsManagmentView },
  ],
})

export default router

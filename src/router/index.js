import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/portfolio', name: 'portfolio', component: PortfolioView },
  { path: '/catalogo', name: 'catalog', component: CatalogView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

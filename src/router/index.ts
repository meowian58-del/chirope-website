import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetailView from '../views/ServiceDetailView.vue'
import SolutionDetailView from '../views/SolutionDetailView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import QuoteView from '../views/QuoteView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import NotFoundView from '../views/NotFoundView.vue'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 90 }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/ocean-freight', component: ServiceDetailView },
    { path: '/air-freight', component: ServiceDetailView },
    { path: '/rail-freight', component: ServiceDetailView },
    { path: '/road-freight', component: ServiceDetailView },
    { path: '/value-added-services', component: ServiceDetailView },
    { path: '/fba-logistics', component: SolutionDetailView },
    { path: '/commercial-cargo-shipping', component: SolutionDetailView },
    { path: '/door-to-door-delivery', component: SolutionDetailView },
    { path: '/warehouse-distribution', component: SolutionDetailView },
    { path: '/about', component: AboutView },
    { path: '/news', component: NewsView },
    { path: '/quote', component: QuoteView },
    { path: '/privacy', component: PrivacyView },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
})

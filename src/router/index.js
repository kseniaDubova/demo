import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home/home.vue'
import Company from '@/views/company/company.vue'
import Portfolio from '@/views/portfolio/portfolio.vue'
import Blog from '@/views/blog/blog.vue'
import Services from '@/views/services/services.vue'

const BACKGROUNDS = {
  default: '#000000',
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
      background: BACKGROUNDS.default,
    },
  },
  {
    path: '/company',
    name: 'Компания',
    component: Company,
    meta: {
      layout: 'default',
      background: BACKGROUNDS.default,
    },
  },
  {
    path: '/portfolio',
    name: 'Портфолио',
    component: Portfolio,
    meta: {
      layout: 'default',
      background: BACKGROUNDS.default,
    },
  },
  {
    path: '/blog',
    name: 'Блог',
    component: Blog,
    meta: {
      layout: 'default',
      background: BACKGROUNDS.default,
    },
  },
  {
    path: '/services',
    name: 'Услуги',
    component: Services,
    meta: {
      layout: 'default',
      background: BACKGROUNDS.default,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

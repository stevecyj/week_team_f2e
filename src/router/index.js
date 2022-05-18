import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import(/* webpackChunkName: "newpage" */ '../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import(/* webpackChunkName: "a" */ '../components/Test/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import(/* webpackChunkName: "b" */ '../components/Test/ComponentB.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

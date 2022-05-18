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
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/Test/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../components/Test/ComponentB.vue')
      },
      {
        path: 'namedView',
        component: () => import('../components/Test/NameView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../components/Test/ComponentC.vue'),
              right: () => import('../components/Test/ComponentA.vue')
            }
          },
          {
            path: 'a2c',
            components: {
              left: () => import('../components/Test/ComponentA.vue'),
              right: () => import('../components/Test/ComponentC.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game,
    meta: { title: 'VueJS Elephant Quiz' }
  },
  {
    path: '/congrat',
    name: 'Reward',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reward.vue'),
    meta: { title: 'Congratulations!' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Handle document title change
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

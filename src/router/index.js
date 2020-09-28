import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './home.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    isMenu: false
  },
  { path: '*', redirect: '/login', isMenu: false },
  ...home,
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/404'),
    isMenu: false
  }
]

const router = new VueRouter({
  routes
})

// Avoided redundant navigation to current location: "/".
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = router
  router.matcher = newRouter.matcher // reset router
}

export default router

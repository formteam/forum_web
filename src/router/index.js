import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


/* Layout */
import personalCenter from './personalCenter'
import gossip from './gossip'
export const constantRouterMap = [
  personalCenter,
  gossip,
  { path: '/', component: () => import('@/views/login/login'), hidden: true },
  { path: '/register', component: () => import('@/views/login/register'), hidden: true },
]
export default new Router({


  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap

})

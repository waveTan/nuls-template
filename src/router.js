import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/page1',
      name: 'page1',
      component: resolve => require(['@/views/page1.vue'], resolve)
    },
    {
      path: '/page2',
      name: 'page2',
      component: resolve => require(['@/views/page2.vue'], resolve)
    }

  ]
})

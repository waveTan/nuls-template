import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve)
    },
    {
      path: '/NewAddress',
      name: 'newAddress',
      component: resolve => require(['@/views/user/NewAddress.vue'], resolve)
    },
    {
      path: '/BackupsAddress',
      name: 'backupsAddress',
      component: resolve => require(['@/views/user/BackupsAddress.vue'], resolve)
    }

  ]
})

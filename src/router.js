import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import NewAddress from './views/user/NewAddress'
import BackupsAddress from './views/user/BackupsAddress'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/NewAddress',
      name: 'newAddress',
      component: NewAddress
    },
    {
      path: '/BackupsAddress',
      name: 'backupsAddress',
      component: BackupsAddress
    }

  ]
})

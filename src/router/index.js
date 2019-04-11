import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/webviews/login/login' 
import Index from '@/webviews/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Index',
      name:'Index',
      component:Index

    }
  ]
})

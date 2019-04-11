import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/webviews/login/login' 
import Index from '@/webviews/index/index'
import User from '@/webviews/user/user' 
import UserItem from '@/webviews/user/components/UserItem'
import UserNews from '@/webviews/user/components/UserNews'

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

    },
    {
      path:'/User',
      name:'User',
      redirect:'/User/useritem',
      component:User,
        children:[
          {path:'useritem', name:'user.item', component:UserItem},
          {path:'usernews', name:'user.news', component:UserNews}
        ],

    }

  ]
})

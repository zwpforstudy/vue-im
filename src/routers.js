/**
 * Created by flower on 16/11/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Login from './views/Login'
import Selector from './views/Selector'
import Chat from './views/Chat'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/selector',
      name: 'selector',
      component: Selector
    },
    {
      path: '/chat/:userId',
      name: 'chat',
      component: Chat
    }
  ]
})
export default router

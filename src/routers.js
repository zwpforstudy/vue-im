/**
 * Created by flower on 16/11/1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from './components/Hello'
import Login from './components/Login'
import UserList from './components/UserList'
import Chat from './components/Chat'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Hello
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: UserList
    },
    {
      path: '/chat/:userId',
      name: 'chat',
      component: Chat
    }
  ]
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 1page -> login 으로
      name: 'Login',
      component: Login
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld 
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/page/layout'
import HelloWorld from '@/page/HelloWorld'
import account from '@/page/account'
import tips from '@/page/tips'
import constellation from '@/page/constellation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      //嵌套路由
      children:[{
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
      },
      {
        path:'/account',
        name:'account',
        component:account
      },
      {
        path:'/tips',
        name:'tips',
        component:tips
      },
      {
        path:'/constellation',
        name:'constellation',
        component:constellation,
        
      }
      ]
    }
  ]
})

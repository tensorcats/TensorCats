import Vue from 'vue'
import Router from 'vue-router'
import EditLayout from '@/layout/Edit'
import MainLayout from '@/layout/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout
    },
    {
      path: '/edit',
      component: EditLayout
    }
  ]
})

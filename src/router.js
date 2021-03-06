import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
          {
            path: '/',
            name: 'index',
            component: ()=>import('./views/Index.vue')
          },
        {
          path: '/play',
          name: 'play',
          component: () => import('./views/Play.vue')
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('./views/Contact.vue')
        },
        {
          path: '/category/:category',
          name: 'category',
          component: () => import('./views/Category.vue')
        },
        {
          path: '/search/:content',
          name: 'search',
          component: () => import('./views/Search.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import WordList from '@/components/WordList'
import Word from '@/components/Word'
import SearchIt from '@/components/SearchIt'
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
import DemoThree from './components/DemoThree.vue'
import DemoFour from './components/DemoFour.vue'
import DemoFive from './components/DemoFive.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/words',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/words/word/:id',
      name: 'Word',
      component: Word
    },
    {
      path: '/searchit',
      name: 'SearchIt',
      component: SearchIt
    },
    {
      path: '/demo-1',
      name: 'DemoOne',
      component: DemoOne
    },
    {
      path: '/demo-2',
      name: 'DemoTwo',
      component: DemoTwo
    },
    {
      path: '/demo-3',
      name: 'DemoThree',
      component: DemoThree
    },
    {
      path: '/demo-4',
      name: 'DemoFour',
      component: DemoFour
    },
    {
      path: '/demo-5',
      name: 'DemoFive',
      component: DemoFive
    }
  ]
})

/*
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // webpackChunkName: "about"
      component: () => import('./views/About.vue')
    }
  ]
})
*/

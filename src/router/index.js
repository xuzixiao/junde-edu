import Vue from 'vue'
import Router from 'vue-router'
import indexpage from '../pages/index.vue'
import Server from "../pages/service.vue"
import Contact from "../pages/contact.vue"
import Organ from "../pages/organ.vue"
import notfound from "../pages/notfound.vue"

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
     {
       path: '*',
       name: '404',
       component: notfound
     },{
      path: '/',
      name: 'home',
      component: indexpage
    },{
      path: '/index',
      name: 'index',
      component: indexpage
    },{
      path: '/server',
      name: 'server',
      component: Server
    },{
      path: '/contact',
      name: 'contact',
      component: Contact
    },{
      path: '/organ',
      name: 'organ',
      component: Organ
    }

  ]
})

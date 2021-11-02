import Vue from 'vue' 
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Person from '../pages/Person/Person.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                showFoot:true    
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFoot:true    
            }
        },
        {
            path:'/person',
            component:Person,
            meta:{
                showFoot:true    
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFoot:true    
            }
        },
        {
            path:'/login',
            component:Login
        },
        {
            path: '/', 
            redirect: '/home'
        }
    ]
})

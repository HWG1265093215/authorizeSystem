import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
 
const Home = () => import('../components/Home.vue')
const mail=()=>import('../Views/shop/mail.vue');
const user=()=>import('../Views/user/user.vue');
// const other1=()=>import('../Views/others/other1.vue');
const other2=()=>import('../Views/others/other2.vue');
const other3=()=>import('../Views/others/other3.vue');
const other4=()=>import('../Views/others/other4.vue');

var routers = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/Home",
    redirect:"/"
  },
  {
    path:"/mail",
    component:mail
  },
  {
    path:"/user",
    component:user
  },
  {
    path:"/other2",
    component:other2
  },
  {
    path:"/other3",
    component:other3
  },
  {
    path:"/other4",
    component:other4
  }
]

const routerConfig = createRouter({
  routes: routers,
  history: createWebHistory(),
  saveScrollPosition: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  transitionOnload: true
})

export default routerConfig

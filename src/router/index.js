import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomeFactor from '../views/HomeFactor.vue'
import HomeDelivery from '../views/HomeDelivery.vue'
import login from '../views/login.vue'
import register from '../views/Register.vue'
import orderList from '../views/Datacollector/order/orderList.vue'
import orderFrom from '../views/Datacollector/order/orderFrom.vue'
import cusList from '../views/Datacollector/dataCus/cusList'
import cusFrom from '../views/Datacollector/dataCus/cusFrom'
import productList from '../views/Datacollector/dataProduct/productList'
import status from '../views/Datacollector/statusDelivery/status'
import editCount from '../views/Facturer/editProduct/editCount'
import productList2 from '../views/Facturer/dataProduct2/productList2'
import changeStatus3 from '../views/Deliveryman/changeStatus/changeStatus3'
import formStatus from '../views/Deliveryman/changeStatus/formStatus'

Vue.use(VueRouter)

const routes = [
  // { path: '/datacollect',name: 'Home',component: Home, meta: { auth: true } },
  { path: '/datacollect',name: 'order-list',component: orderList, meta: { auth: true } },
  { path: '/datacollect/order/from',name: 'order-from',component: orderFrom, meta: { auth: true } },
  { path: '/datacollect/cuslist',name: 'cus-list',component: cusList, meta: { auth: true } },
  { path: '/datacollect/cusfrom/from',name: 'cus-from',component: cusFrom, meta: { auth: true } },
  { path: '/datacollect/productlist',name: 'product-list',component: productList, meta: { auth: true } },
  { path: '/datacollect/status',name: 'status',component: status, meta: { auth: true } },

  // { path: '/facturer',name: 'HomeFacturer',component: HomeFactor, meta: { auth: true } },
  { path: '/facturer/editcount/:id',name: 'edit-count',component: editCount, meta: { auth: true } },
  { path: '/facturer',name: 'product-list2',component: productList2, meta: { auth: true } },

  // { path: '/deliveryman',name: 'HomeDelivery',component: HomeDelivery, meta: { auth: true } },
  { path: '/deliveryman',name: 'status3',component: changeStatus3, meta: { auth: true } },
  { path: '/deliveryman/formstatus',name: 'form-status',component: formStatus, meta: { auth: true } },

  
  { path: '/register', name:'register', component:register }, 
  { path: '/login', name:'login', component:login }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

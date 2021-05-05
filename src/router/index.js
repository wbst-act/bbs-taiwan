import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', name: 'Home', component: () => import('../views/List.vue') }
    ]
  },
  {
    path: encodeURI('/鳥名錄'),
    name: '鳥名錄',
    component: () => import('../views/eBird.vue')
  },
  {
    path: encodeURI('/子樣區列表/:logid'),
    name: '子樣區列表',
    component: () => import('../views/Logdtl.vue')
  },
  {
    path: encodeURI('/BBS記錄/:logid'),
    name: 'BBS記錄',
    component: () => import('../views/Birddtl.vue')
  },
  {
    path: encodeURI('/樣點設定/:plotid'),
    name: '樣點設定',
    component: () => import('../views/Plotdtl.vue')
  },
  {
    path: encodeURI('/地圖預覽/:plotid'),
    name: '地圖預覽',
    component: () => import('../views/Map.vue')
  },
  {
    path: encodeURI('/歷年鳥種清單/:plotid'),
    name: '歷年鳥種清單',
    component: () => import('../views/Plotbird.vue')
  },
  {
    path: encodeURI('/樣區設定'),
    name: '樣區設定',
    component: () => import('../views/Plot.vue')
  },
  {
    path: encodeURI('/關於程式'),
    name: '關於程式',
    component: () => import('../views/About.vue')
  },
  {
    path: encodeURI('/合併匯出'),
    name: '合併匯出',
    component: () => import('../views/Excel.vue')
  },
  {
    path: encodeURI('/eBird匯入產生器'),
    name: 'eBird匯入產生器',
    component: () => import('../views/eBirdExport.vue')
  },
  {
    path: encodeURI('/更新資料'),
    name: '更新資料',
    component: () => import('../views/UpdateData.vue')
  },

  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

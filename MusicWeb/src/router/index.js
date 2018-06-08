import Vue from 'vue'
import Router from 'vue-router'
import MusicList from '@/components/musicList/MusicList'
import MusicSort from '@/components/musicSort/MusicSort'
import MusicSearch from '@/components/musicsearch/MusicSearch'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/musiclist'
  }, {
    path: '/musiclist',
    name: 'MusicList',
    component: MusicList
  }, {
    path: '/musicsort',
    name: 'MusicSort',
    component: MusicSort
  }, {
    path: '/musicsearch',
    name: 'MusicSearch',
    component: MusicSearch
  }]
})

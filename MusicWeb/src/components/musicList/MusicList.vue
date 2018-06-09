<!--歌单页-->
<template>
  <div class="musicList">
    <music-swiper :swiperList='swiperList' />
    <p class="mTitle" @click="MusicListTitle(2)" v-text="UnitNme"></p>
    <component :is="MusicUnit" :musicList='musicList' :More='More' @MusicUnitList='MusicListTitle' @moreUnit='moreUnit' />
  </div>
</template>
<script>
import MusicSwiper from '@/components/musicList/swiper/MusicSwiper'
import MusicUnit from '@/components/musicList/musicUnit/MusicUnit'
import UnitList from '@/components/musicList/unitList/UnitList'
import { mapActions } from 'vuex'
export default {
  name: 'MusicList',
  data() {
    return {
      UnitNme: '全部歌单',
      MusicUnit: 'MusicUnit',
      swiperList: [],
      musicList: [],
      unitNum: 0, //数量起始
      More: false //没有更多
    }
  },
  components: {
    MusicSwiper,
    MusicUnit,
    UnitList
  },
  methods: {
    ...mapActions(['actMusicListFn']),
    //歌单和歌单列表
    MusicListTitle: function(title, id) {
      if (title == 1) {
        this.musicListFn(id)
        this.UnitNme = '返回歌单'
        this.MusicUnit = 'UnitList'
      } else {
        this.UnitNme = '全部歌单'
        this.MusicUnit = 'MusicUnit'
      }
    },
    //轮播图list
    swiperListFn: function() {
      var url = '/api/banner'
      this.$ajax
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.swiperList = res.data.banners
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    //歌单单元列表
    unitListFn: function() {
      var url = '/api/top/playlist'
      this.$ajax
        .get(url, {
          params: {
            limit: 10,
            offset: this.unitNum
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.musicList = this.musicList.concat(res.data.playlists)
            this.More = res.data.more
          }
        })
        .catch(error => {
          this.More = false
          console.log(error)
        })
    },
    //歌单歌曲列表
    musicListFn: function(id) {
      var url = '/api/playlist/detail'
      this.$ajax
        .get(url, {
          params: {
            id
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.playlist)
            this.actMusicListFn(res.data.playlist)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    //添加更多
    moreUnit: function() {
      this.unitNum += 10
      this.unitListFn()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.swiperListFn()
      this.unitListFn()
    })
  }
}
</script>
<style scoped>
.musicList >>> .UnitListWrapper {
  overflow: hidden;
  position: absolute;
  top: 23.3rem !important;
  right: 0;
  bottom: 0;
  left: 0;
}

.musicList .mTitle {
  color: #666;
  padding-left: 1rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 600;
  z-index: 9;
}
</style>
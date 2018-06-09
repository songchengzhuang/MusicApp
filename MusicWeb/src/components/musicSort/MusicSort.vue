<!--排行榜-->
<template>
  <div class="musicSort">
    <component :is='MusicUnit' :SortUnitList='SortUnitList' @sortUnitList='sortUnitList' />
  </div>
</template>
<script>
import SortUnit from '@/components/musicSort/sortUnit/SortUnit'
import SortList from '@/components/musicSort/sortList/SortList'
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'MusicSort',
  data() {
    return {
      MusicUnit: 'SortUnit',
      SortUnitList: [] //排行榜模块列表
    }
  },
  components: {
    SortUnit,
    SortList
  },
  methods: {
    ...mapActions(['actMusicListFn']),
    // ...mapMutations(['dianjile']),
    sortUnitList: function(title, id) {
      if (title == 1) {
        this.unitMusicListFn(id)
        this.MusicUnit = 'SortList'
      } else {
        this.MusicUnit = 'SortUnit'
      }
    },
    //排行榜单元列表
    sortListFn: function() {
      //因为没找到接口暂且静态json数据
      var url = '../../../static/sortJsonData.json'
      this.$ajax
        .get(url)
        .then(res => {
          this.SortUnitList = res.data.SortUnitList
        })
        .catch(error => {
          console.log(error)
        })
    },
    //排行榜音乐列表
    unitMusicListFn: function(idx) {
      //先清空歌曲列表
      var UnitMusicList = {
        creator: {
          avatarUrl: ''
        }
      }
      this.actMusicListFn(UnitMusicList)

      var url = '/api/top/list?idx=' + idx
      this.$ajax
        .get(url)
        .then(res => {
          if (res.data.code == 200) {
            this.actMusicListFn(res.data.playlist)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.sortListFn()
    })
  }
}
</script>
<style scoped>
</style>
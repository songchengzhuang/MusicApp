<!--搜索页-->
<template>
  <div class="musicSearch">
    <div class="searchInput">
      <input class="inputDom" type="text" maxlength="15" placeholder="搜索明星、歌名..." v-model="searchName">
      <span class="searchIcon" v-if="searchName" @click="trimSearchFn">X</span>
      <span class="searchIcon" v-if="searchName" @click="searchHistFn">搜索</span>
    </div>
    <search-reco :searchReco='searchReco' @nameTapP='nameTapP' />
    <search-history :searchHist='searchHist' @nameTapP='nameTapP' @delNameTapP='delNameTapP' />
  </div>
</template>
<script>
import SearchReco from '@/components/musicSearch/searchReco/SearchReco.vue'
import SearchHistory from '@/components/musicSearch/searchHistory/SearchHistory.vue'
export default {
  name: 'MusicSearch',
  components: {
    SearchReco,
    SearchHistory
  },
  data() {
    return {
      searchReco: [], //搜索推荐
      searchHist: [], //搜索历史
      searchName: '' //搜索
    }
  },
  methods: {
    //搜索推荐列表
    searchRecoFn() {
      var url = '/api/top/artists'
      this.$ajax
        .get(url, {
          params: {
            limit: 10,
            offset: 0
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.searchReco = res.data.artists
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    //获取本地历史记录
    getLocalSearchFn() {
      this.searchHist = localStorage.getItem('localMusicHistList').split(',')
    },
    //保存历史搜索
    searchHistFn() {
      if (this.searchName) {
        if (!this.searchHist || this.searchHist.length == 0) {
          this.searchHist = []
          this.searchHist.unshift(this.searchName)
          localStorage.setItem('localMusicHistList', this.searchHist)
        } else if (this.searchHist.length > 0 && this.searchHist.length < 15) {
          //历史搜索不添加重复
          if (this.searchHist.indexOf(this.searchName) < 0) {
            this.searchHist.unshift(this.searchName)
            localStorage.setItem('localMusicHistList', this.searchHist)
          }
        }
      }
    },
    nameTapP(name) {
      this.searchName = name
    },
    //删除单个历史搜索
    delNameTapP(index) {
      this.searchHist.splice(index, 1)
      localStorage.setItem('localMusicHistList', this.searchHist)
    },
    //清除搜索框
    trimSearchFn() {
      this.searchName = ''
    }
  },
  computed: {
    //
  },
  mounted() {
    this.$nextTick(() => {
      this.searchRecoFn()
      this.getLocalSearchFn()
    })
  }
}
</script>
<style scoped>
.musicSearch .searchInput {
  width: 90%;
  height: 2.8rem;
  border: 1px solid #ffe5e5;
  border-radius: 1.4rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}

.musicSearch .searchInput .inputDom {
  width: 65%;
  height: 100%;
  font-size: 1.2rem;
  padding: 0 10px;
  margin-left: 2rem;
  border: none;
  outline: none;
}

.searchInput .searchIcon {
  margin-left: 1rem;
}
</style>
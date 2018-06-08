<!--搜索页-->
<template>
  <div class="musicSearch">
    <div class="searchInput">
      <input type="text" placeholder="搜索明星、歌名...">
    </div>
    <search-reco/>
    <search-history/>
  </div>
</template>
<script>
import SearchReco from '@/components/musicSearch/searchReco/SearchReco.vue'
import SearchHistory from '@/components/musicSearch/searchHistory/SearchHistory.vue'
export default {
  name: 'MusicSearch',
  data() {
    return {
      //
    }
  },
  components: {
    SearchReco,
    SearchHistory
  }
}
</script>
<style scoped>
.musicSearch .searchInput {
  width: 100%;
  height: 25px;
  text-align: center;
}

.musicSearch .searchInput > input {
  width: 90%;
  height: 100%;
  padding: 0 10px;
  border: none;
}

.musicSearch .searchInput > input:focus {
  border: none;
}
</style>
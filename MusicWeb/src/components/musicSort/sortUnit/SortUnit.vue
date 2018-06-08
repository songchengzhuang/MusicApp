<!--排行榜列表-->
<template>
  <div class="musicSortWrapper" ref="musicSortWrapper">
    <div class="musicSort">
      <div class="sortUnit" v-for="item of SortUnitListData" :key="item.idx" @click="musicTap(item)">
        <div class="sortTitle">
          <span v-text="item.sortName"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'SortUnit',
  props: {
    SortUnitList: Array
  },
  data() {
    return {
      //
    }
  },
  methods: {
    musicTap: function(m_id) {
      this.$emit('sortUnitList', 1, m_id)
    }
  },
  computed:{
    SortUnitListData(){
      return this.SortUnitList
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.musicSortWrapper, { click: true })
    })
  }
}
</script>
<style scoped>
.musicSortWrapper {
  overflow: hidden;
  position: absolute;
  top: 5rem;
  right: 0;
  bottom: 0;
  left: 0;
}
.musicSort .sortUnit {
  margin: 10px 7px;
  height: 30vw;
  border-radius: 6px;
  box-shadow: 3px 3px 10px #ccc;
  display: flex;
}
</style>
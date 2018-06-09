<!--搜索页历史列表-->
<template>
  <div class="SearchHist" v-if="searchHistData.length!=0">
    <p class="histTxt">推荐历史</p>
    <div class="histList">
      <span class="histItem" v-for="(item,index) of searchHistData" :key="item">
        <span @click="nameTap(item)" v-text="item"></span>
        <span class="histClear" @click="delNameTap(index)">X</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHist',
  props: ['searchHist'],
  data() {
    return {
      //
    }
  },
  methods: {
    nameTap(name) {
      this.$emit('nameTapP', name)
    },
    delNameTap(index) {
      this.$emit('delNameTapP', index)
    }
  },
  computed: {
    searchHistData() {
      return this.searchHist
    }
  }
}
</script>
<style scoped>
.SearchHist .histTxt {
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding-left: 1.6rem;
  margin-bottom: 0.5rem;
}

.SearchHist .histList {
  margin: 0.5rem 1.6rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.histList .histItem {
  height: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  padding: 0px 2rem 0px 1rem;
  margin: 1rem 2rem 0px 0px;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
  position: relative;
}

.histItem .histClear {
  position: absolute;
  top: 0;
  right: 0;
  color: #ffcccc;
  padding: 0 3px;
}
</style>
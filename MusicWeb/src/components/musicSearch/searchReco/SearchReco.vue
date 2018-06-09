<!--搜索页推荐列表-->
<template>
  <div class="SearchReco">
    <p class="recoTxt">推荐搜索</p>
    <div class="recoList">
      <span v-for="item of searchRecoData" :key="item.id" v-text="item.name" @click="nameTap(item.name)"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchReco',
  props: ['searchReco'],
  data() {
    return {
      //
    }
  },
  methods: {
    nameTap(name) {
      this.$emit('nameTapP', name)
    }
  },
  computed: {
    searchRecoData() {
      return this.searchReco
    }
  }
}
</script>
<style scoped>
.SearchReco {
  margin-bottom: 25px;
}
.SearchReco .recoTxt {
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding-left: 16px;
  margin-bottom: 5px;
}

.SearchReco .recoList {
  margin: 5px 16px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.recoList span {
  height: 20px;
  line-height: 20px;
  font-size: 1.2rem;
  padding: 0px 15px;
  margin: 10px 20px 0px 0px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
</style>
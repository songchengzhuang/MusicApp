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
  margin-bottom: 2.5rem;
}
.SearchReco .recoTxt {
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding-left: 1.6rem;
  margin-bottom: 0.5rem;
}

.SearchReco .recoList {
  margin: 0.5rem 1.6rem;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.recoList span {
  height: 2rem;
  line-height: 2rem;
  font-size: 1.2rem;
  padding: 0px 1.5rem;
  margin: 1rem 2rem 0px 0px;
  border: 1px solid #ccc;
  border-radius: 0.6rem;
  box-shadow: 0.2rem 0.2rem 0.5rem #ccc;
  letter-spacing: 2px;
}
</style>
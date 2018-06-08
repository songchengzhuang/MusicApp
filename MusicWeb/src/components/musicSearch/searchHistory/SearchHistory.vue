<!--搜索页历史列表-->
<template>
  <div class="SearchHist">
    <p class="histTxt">推荐历史</p>
    <div class="histList">
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
      <span class="histItem">1111231
        <span class="histClear">X</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchHist',
  data() {
    return {
      //
    }
  }
}
</script>
<style scoped>
.SearchHist .histTxt {
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 600;
  padding-left: 16px;
  margin-bottom: 5px;
}

.SearchHist .histList {
  margin: 5px 16px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.histList .histItem {
  height: 20px;
  line-height: 20px;
  font-size: 1.2rem;
  padding: 0px 20px 0px 10px;
  margin: 10px 20px 0px 0px;
  border: 1px solid #ccc;
  border-radius: 6px;
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
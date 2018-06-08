<template>
  <div class="headerTap">
    <router-link tag="div" to="/musiclist">
      <span>歌单</span>
    </router-link>
    <router-link tag="div" to="/musicsort">
      <span>排行榜</span>
    </router-link>
    <router-link tag="div" to="/musicsearch">
      <span>搜索</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HeaderTap',
  data() {
    return {
      //
    }
  }
}
</script>
<style scoped>
.headerTap {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.6rem;
  color: #333;
  /*CSS3弹性盒子*/
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  position: relative;
}

.headerTap::after {
  width: 90%;
  content: '';
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: #f2f2f2;
}

.router-link-active {
  font-weight: 600;
  color: #ea2000;
  position: relative;
  top: -2px;
}
</style>


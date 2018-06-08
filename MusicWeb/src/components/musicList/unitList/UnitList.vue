<template>
  <div class="UnitListWrapper" ref="UnitListWrapper">
    <div class="UnitList">
      <div class="unitTitle">
        <img class="titImg" src="../../../assets/001.png" alt="图片">
        <div class="titName txt-2-ellipsis">
          <p class="txt-2-ellipsis">歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单名字</p>
          <p class="txt-1-ellipsis">作者单名字歌单名字歌单名字歌单名字歌单名字歌单名字歌单</p>
        </div>
      </div>
      <ul class="unituL">
        <li class="unitLi" v-for="(item , index) of 15" :key="item">{{index+1}}答案</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'UnitList',
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.UnitListWrapper, { click: true })
    })
  }
}
</script>
<style scoped>
.UnitListWrapper {
  overflow: hidden;
  position: absolute;
  top: 7.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.UnitList .unitTitle {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
}
.UnitList .titImg {
  width: 30%;
  height: 25vw;
  margin: 0 10px;
  border-radius: 6px;
}

.UnitList .titName {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 35vw;
  box-sizing: border-box;
}

.titName p {
  font-size: 1.3rem;
  line-height: 1.6rem;
  padding: 0 10px;
  margin: 5px 0 10px 0;
  letter-spacing: 3px;
}

.UnitList .unituL {
  width: 100%;
  padding: 0;
}

.unituL .unitLi {
  height: 35px;
  line-height: 35px;
  font-size: 1.3rem;
  padding: 0 10px;
  margin: 5px 10px 10px 10px;
  border-radius: 6px;
  box-shadow: 3px 3px 16px #ccc;
}
</style>



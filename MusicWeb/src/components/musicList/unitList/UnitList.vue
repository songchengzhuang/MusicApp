<template>
  <div class="UnitListWrapper" ref="UnitListWrapper">
    <div class="UnitList">
      <div class="unitTitle">
        <img class="titImg" :src="musicObjData.creator.avatarUrl" :alt="musicObjData.creator.backgroundImgId">
        <div class="titName txt-2-ellipsis">
          <p class="txt-2-ellipsis" v-text="musicObjData.creator.signature"></p>
          <p class="txt-1-ellipsis" v-text="musicObjData.creator.nickname"></p>
        </div>
      </div>
      <ul class="unituL">
        <li class="unitLi txt-1-ellipsis" v-for="(item , index) of musicObjData.tracks" :key="index">
          <div class="unitTxt txt-1-ellipsis">
            <span class="musicIndex" v-text="index+1"></span>
            <span class="musicName" v-text="item.name"></span>
            <span class="SingerName">
              <span v-for="(itemSinger,index) of item.ar" :key="index" v-text="item.ar.length==(index+1)?itemSinger.name:(itemSinger.name+'、')"></span>
            </span>
          </div>
          <!-- <span>图标</span> -->
        </li>
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
  },
  computed: {
    musicObjData() {
      return this.$store.state.UnitMusicList
    }
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
  box-sizing: border-box;
}

.unitLi .unitTxt {
  width: 80%;
}

.unitTxt .musicName {
  font-size: 1.4rem;
}
.unitTxt .musicIndex {
  width: 23px;
  color: #ffb3b3;
  text-align: center;
}
.unitTxt .SingerName {
  color: #999;
  font-size: 1.2rem;
  margin-left: 25px;
}
</style>



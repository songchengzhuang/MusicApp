<template>
  <div class="UnitListWrapper" ref="UnitListWrapper">
    <div class="UnitList" v-show="musicObjData.creator.avatarUrl">
      <div class="unitTitle">
        <img class="titImg" :src="musicObjData.creator.avatarUrl" :alt="musicObjData.creator.backgroundImgId">
        <div class="titName txt-2-ellipsis">
          <p class="MListTit txt-2-ellipsis" v-text="musicObjData.name"></p>
          <p class="txt-1-ellipsis" v-text="musicObjData.creator.nickname"></p>
        </div>
      </div>
      <ul class="unituL">
        <li class="unitLi txt-1-ellipsis" v-for="(item , index) of musicObjData.tracks" :key="index" @click="audioPlayFn(index)">
          <div class="unitTxt txt-1-ellipsis">
            <span class="musicIndex" v-text="index+1"></span>
            <span class="musicName" v-text="item.name"></span>
            <span class="SingerName">
              <span v-for="(itemSinger,index) of item.ar" :key="index" v-text="item.ar.length==(index+1)?itemSinger.name:(itemSinger.name+'、')"></span>
            </span>
          </div>
          <!-- <span>图标</span> -->
          <audio :ref="'audioDom'+index" src="http://music.163.com/song/media/outer/url?id=33894312.mp3">
            <source src="http://music.163.com/song/media/outer/url?id=33894312.mp3" type="audio/mpeg" />
            <embed src="http://music.163.com/song/media/outer/url?id=33894312.mp3" />
          </audio>
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
  methods: {
    audioPlayFn(index) {
      var audioDom = this.$refs['audioDom' + index]
      console.log(audioDom)
      audioDom.play()
    }
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

.unitTitle .MListTit {
  font-size: 1.4rem;
  font-weight: 600;
}

.UnitList .titImg {
  width: 30%;
  height: 25vw;
  margin: 0 1rem;
  border-radius: 0.6rem;
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
  padding: 0 1rem;
  margin: 0.5rem 0 1rem 0;
  letter-spacing: 3px;
}

.UnitList .unituL {
  width: 100%;
  padding: 0;
  padding-bottom: 1rem;
}

.unituL .unitLi {
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.3rem;
  padding: 0 1rem;
  margin: 0.5rem 1rem 1rem 1rem;
  border-radius: 6px;
  box-shadow: 0.3rem 0.3rem 1.6rem #ccc;
  box-sizing: border-box;
}

.unitLi .unitTxt {
  width: 80%;
}

.unitLi .unitTxt span {
  display: inline;
}

.unitTxt .musicIndex {
  width: 2.5rem;
  color: #ffb3b3;
  text-align: center;
}

.unitTxt .musicName {
  font-size: 1.4rem;
}

.unitTxt .SingerName {
  color: #999;
  font-size: 1.2rem;
  margin-left: 2.5rem;
}
</style>



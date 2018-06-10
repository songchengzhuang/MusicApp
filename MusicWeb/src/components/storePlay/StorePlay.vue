<template>
  <div class="StorePlay" v-if="playMusicObj.name">
    <div class="playBg"></div>
    <img class="playImg" :src="playMusicObj.musicImg" alt="图片" :key="playMusicObj.id+'img'" />
    <span class="playName txt-1-ellipsis" v-text="playMusicObj.name"></span>
    <span class="playIcon" @click="audioPlayFn" v-text="iconMusic?'播放':'暂停'"></span>
    <audio id="audioDom" autoplay ref="audioDom" :key="playMusicObj.id">
      <source :src="playMusicObj.musicUrl" type="audio/mpeg" />
      <embed :src="playMusicObj.musicUrl" />
    </audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'StorePlay',
  data() {
    return {
      iconMusic: false
    }
  },
  methods: {
    audioPlayFn() {
      var audioDom = this.$refs.audioDom
      if (audioDom.paused || audioDom.ended) {
        audioDom.play()
        this.iconMusic = false
      } else {
        audioDom.pause()
        this.iconMusic = true
      }
    }
  },
  computed: {
    ...mapState(['playMusicData']),
    playMusicObj() {
      return this.playMusicData
    }
  },
  watch: {
    playMusicObj() {
      this.iconMusic = false
    }
  }
}
</script>
<style scoped>
.StorePlay,
.StorePlay .playBg {
  width: 100%;
  height: 6rem;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
}

.StorePlay {
  color: #fff;
  padding: 0 1.6rem;
  box-sizing: border-box;
  /* 固定定位 */
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
}
.StorePlay .playBg {
  background-color: #999;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}

.StorePlay .playImg {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  vertical-align: middle;
}

.StorePlay .playName {
  width: 50%;
  font-size: 1.3rem;
  line-height: 6rem;
  font-weight: 600;
  margin-left: 1.5rem;
  letter-spacing: 2px;
  vertical-align: middle;
}
.StorePlay .playIcon {
  font-size: 1.4rem;
  line-height: 6rem;
  margin-left: 2rem;
  vertical-align: middle;
}
</style>


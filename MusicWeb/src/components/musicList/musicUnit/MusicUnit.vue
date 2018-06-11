<!--歌单列表-->
<template>
  <div class="musicUnitWrapper" ref="musicUnitWrapper">
    <div>
      <div class="musicUnit">
        <div class="mUnit" v-for="item of musicListData" :key="item.id">
          <div class="mUnitImg" @click="musicTap(item.id)">
            <img class="mImg" :src="item.coverImgUrl" :alt="item.userId">
            <span class="mAuthor txt-1-ellipsis" v-text="item.creator.nickname"></span>
          </div>
          <span class="mIntr txt-2-ellipsis" v-text="item.name"></span>
        </div>
      </div>
      <!-- 点击加载更多 -->
      <div class="moreUnit" v-if="musicListData.length">
        <span @click="moreUnit" v-text="MoreData?'小主,还有呦':'小主，没有啦'"></span>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'MusicUnit',
  props: {
    musicList: {
      type: Array,
      default: []
    },
    More: Boolean
  },
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.musicUnitWrapper, {
        click: true,
        pullUpLoad: true
      })
      //上拉加载更多
      this.scroll.on('pullingUp', this.moreUnit)
    })
  },
  methods: {
    musicTap: function(m_id) {
      this.$emit('MusicUnitList', 1, m_id)
    },
    //上拉加载跟多
    moreUnit: function() {
      if (this.MoreData) {
        this.$emit('moreUnit')
      }
    }
  },
  computed: {
    musicListData() {
      return this.musicList
    },
    MoreData() {
      return this.More
    }
  },
  watch: {
    musicListData() {
      this.scroll.finishPullUp()
      this.scroll.refresh()
    }
  }
}
</script>
<style scoped>
.musicUnitWrapper {
  overflow: hidden;
  position: absolute;
  top: 23.5rem;
  right: 0;
  bottom: 0;
  left: 0;
}
.musicUnit {
  /*CSS3弹性盒子*/
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.musicUnit .mUnit {
  width: 45%;
  border-radius: 6px;
  margin-bottom: 2.5rem;
}

.musicUnit .mUnit .mUnitImg {
  width: 100%;
  height: 45vw;
  border-radius: 6px;
  position: relative;
}

.mUnitImg .mImg {
  width: 100%;
  height: 100%;
}

.mUnit .mAuthor {
  width: 90%;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.2rem;
  position: absolute;
  left: 6px;
  bottom: 3px;
  letter-spacing: 1px;
}

.mUnit .mIntr {
  width: 100%;
  color: #333;
  font-size: 1.3rem;
  line-height: 1.5rem;
  margin-top: 3px;
  letter-spacing: 2px;
}

.moreUnit {
  font-size: 1rem;
  line-height: 1rem;
  color: #ffbdb3;
  text-align: center;
  padding-bottom: 12px;
  letter-spacing: 5px;
  margin: 0 auto;
}
</style>
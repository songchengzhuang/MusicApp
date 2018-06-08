<!--排行榜列表-->
<template>
  <div class="musicSortWrapper" ref="musicSortWrapper">
    <ul class="musicSort">
      <li class="sortUnit" v-for="item of SortUnitListData" :key="item.idx" :style="'background:url('+item.bgImgUrl+') no-repeat center'" @click="musicTap(item.idx)">
        <div class="gradual"></div>
        <span class="unitName" v-text="item.sortName"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'SortUnit',
  props: {
    SortUnitList: Array
  },
  data() {
    return {
      //
    }
  },
  methods: {
    musicTap: function(m_id) {
      this.$emit('sortUnitList', 1, m_id)
    }
  },
  computed: {
    SortUnitListData() {
      return this.SortUnitList
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.musicSortWrapper, { click: true })
    })
  }
}
</script>
<style scoped>
.musicSortWrapper {
  overflow: hidden;
  position: absolute;
  top: 4rem;
  right: 0;
  bottom: 0;
  left: 0;
}

.musicSort {
  padding: 6px 0;
}
.musicSort .sortUnit {
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 24vw;
  text-align: center;
  margin: 10px 16px;
  margin-bottom: 20px;
  height: 24vw;
  border-radius: 6px;
  box-shadow: 3px 4px 16px #666;
  letter-spacing: 5px;
  background-size: cover;
  position: relative;
}
.sortUnit .gradual {
  width: 100%;
  height: 8vw;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(
    top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8)
  ); /* 渐变色 */
}
.unitName {
  /*图片文字样式*/
  background: url(http://www.kedo.gov.cn/upload/resources/image/2015/05/20/143208832795611564.jpg)
    no-repeat center;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
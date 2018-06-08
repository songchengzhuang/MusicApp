<!--歌单轮播图-->
<template>
  <div class="musicList">
    <swiper class="musicSwiper" :options="swiperOption" ref="musicSwiper">
      <!-- slides -->
      <swiper-slide v-for='(item,index) of swiperListData' :key="index">
        <img :src="item.picUrl" :alt="item.targetId">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'MusicSwiper',
  props: {
    swiperList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    swiperListData() {
      return this.swiperList
    },
    //只是 打印轮播的信息
    swiper() {
      return this.$refs.musicSwiper.swiper
    }
  },
  watch: {
    //
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false);
  }
}
</script>
<style scoped>
.musicList >>> .swiper-pagination-bullet-active {
  width: 16px;
  border-radius: 3px;
  background-color: #fff !important;
}

.musicList >>> .swiper-pagination-bullet {
  background-color: #ea2000;
}

.musicList .musicSwiper {
  width: 100%;
  height: 15.5rem;
  border-radius: 3px;
}

.musicList .musicSwiper img {
  width: 100%;
  height: 100%;
}
</style>
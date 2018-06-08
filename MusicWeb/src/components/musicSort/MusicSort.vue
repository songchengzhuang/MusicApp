<!--排行榜-->
<template>
  <div class="musicSort">
    <component :is='MusicUnit' :SortUnitList='SortUnitList' @sortUnitList='sortUnitList' />
  </div>
</template>
<script>
import SortUnit from '@/components/musicSort/sortUnit/SortUnit'
import SortList from '@/components/musicSort/sortList/SortList'
export default {
  name: 'MusicSort',
  data() {
    return {
      MusicUnit: 'SortUnit',
      SortUnitList: []
    }
  },
  components: {
    SortUnit,
    SortList
  },
  methods: {
    sortUnitList: function(title, id) {
      if (title == 1) {
        console.log(id)
        this.MusicUnit = 'SortList'
      } else {
        this.MusicUnit = 'SortUnit'
      }
    },
    //排行榜单元列表
    sortListFn: function() {
      //因为没找到接口暂且死数据
      this.SortUnitList = [
        {
          sortName: '云音乐新歌榜',
          idx: 0,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '云音乐热歌榜',
          idx: 1,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '网易原创歌曲榜',
          idx: 2,
          bgImgUrl:
            '../http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '云音乐飙升榜',
          idx: 3,
          bgImgUrl: '../../assets/001.png'
        },
        {
          sortName: 'UK排行榜周榜',
          idx: 4,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '美国Billboard周榜',
          idx: 5,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: 'KTV嗨榜',
          idx: 6,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: 'iTunes榜',
          idx: 7,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: 'Hit FM Top榜',
          idx: 8,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '日本Oricon周榜',
          idx: 9,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        },
        {
          sortName: '韩国Melon周榜',
          idx: 10,
          bgImgUrl:
            'http://p1.music.126.net/X-xsnctFZklaFdUQfNYJwg==/109951163339113697.jpg'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.sortListFn()
    })
  }
}
</script>
<style scoped>
</style>
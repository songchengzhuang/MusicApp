<template>
  <div class="SortUnit">
    <p class="goBack" @click="goBack">&lt;返回排行榜</p>
    <unit-list/>
  </div>
</template>
<script>
import UnitList from '@/components/musicList/unitList/UnitList'
export default {
  name: 'SortUnit',
  data() {
    return {
      //
    }
  },
  components: {
    UnitList
  },
  methods: {
    goBack: function() {
      this.$emit('sortUnitList', 2)
    }
  }
}
</script>
<style>
.SortUnit .goBack {
  font-size: 1.2rem;
  line-height: 1.2rem;
  padding-left: 1.6rem;
  color: #ccc;
}
</style>



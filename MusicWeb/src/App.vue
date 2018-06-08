<template>
  <div id="app">
    <header-tap/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import HeaderTap from '@/components/headerTap/HeaderTap'
export default {
  name: 'App',
  components: {
    HeaderTap
  }
}
</script>

<style>
html,
body {
  font-size: 62.5%;
  padding: 0px;
  margin: 0px;
}
@media (min-width: 768px) {
  html,
  body {
    font-size: 20px;
  }
}
@media (min-width: 1024px) {
  html,
  body {
    font-size: 25px;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

span {
  display: inline-block;
}

.txt-1-ellipsis {
  /*1行字符串截取*/
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}

.txt-2-ellipsis {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

ul {
  list-style: none;
}
ul,
menu,
dir {
  display: block;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
}
</style>

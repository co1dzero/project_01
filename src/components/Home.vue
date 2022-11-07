<template>
  <div class="back1">
    <h1>Home</h1>
    <router-link to="/main">访问后台页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
export default {}
</script>

<style lang="less" scoped>
.back1 {
  background-color: aqua;
  min-height: 200px;
  flex: 1;
}
</style>

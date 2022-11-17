<template>
  <div class="app-container">
    <h1>App 1根组件</h1>
    <!-- 当安装了 vue-router 后 就可以使用 router-link 来替代普通的 a 链接了 -->
    <!-- <a href="#/left">左</a> -->
    <!-- <router-link to="/Home">首页</router-link>
    <router-link to="/left">左</router-link>
    <a href="#/right">右</a>
    <router-link to="/about">关于</router-link>
    <hr /> -->

    <!-- 只要在项目中安装并配置了 vue-router ，就可以使用 router-view 这个组件了 -->
    <!-- 它的作用很单纯：占位符 -->
    <!-- <router-view></router-view> -->

    <Echarts></Echarts>
  </div>
</template>

<script>
import Echarts from '@/components/Echarts.vue'
export default {
  name: 'App',
  components: {
    Echarts
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>

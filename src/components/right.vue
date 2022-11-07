<template>
  <div class="back">
    <h1>right组件</h1>
    <button @click="postInfo">POST请求</button>
    <button @click="gotoGY">通过push跳转到关于</button>
    <button @click="gotoGY2">通过replace跳转到关于</button>
    <button @click="goback">通过go后退</button>
    <button @click="gofront">通过go前进</button>
    <button @click="$router.back()">后退1</button>
    <button @click="$router.forward()">前进1</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async postInfo() {
      const { data: res } = await axios.post('/api/post', {
        name: 'zs',
        age: 20,
      })
      console.log(res)
      console.log(res.data)
    },
    gotoGY() {
      // 通过编程式导航API跳转到指定页面
      this.$router.push('/about')
    },
    gotoGY2() {
      // 通过编程式导航API跳转到指定页面
      this.$router.replace('/about')
    },
    goback() {
      //如果后退的层数超过上限，则会原地不动
      this.$router.go(-1)
    },
    gofront() {
      this.$router.go(1)
    },
  },
}
</script>

<style lang="less" scoped>
.back {
  background-color: deeppink;
  min-height: 200px;
  flex: 1;
}
</style>

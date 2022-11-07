<template>
  <div class="back1">
    <h1>left组件</h1>
    <button @click="getInfo">发送GET请求</button>
    <button @click="gotoGY">通过push跳转到关于</button>
    <button @click="gotoGY2">通过replace跳转到关于</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  methods: {
    async getInfo() {
      const { data: res } = await this.axios.get('/api/get')
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
  },
}
</script>

<style lang="less" scoped>
.back1 {
  background-color: aqua;
  min-height: 200px;
  flex: 1;
}
</style>

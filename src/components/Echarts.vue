<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data1">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
          <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
    <div id="myChart1" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
let echarts = require('echarts')
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      data1: [
        {
          title: 'Ant Design Title 1'
        },
        {
          title: 'Ant Design Title 2'
        },
        {
          title: 'Ant Design Title 3'
        },
        {
          title: 'Ant Design Title 4'
        }
      ]
    }
  },
  mounted() {
    this.drawLine()
    this.test()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      console.log(document.getElementById('myChart'))
      let myChart = echarts.init(document.getElementById('myChart'))
      let myChart1 = echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }),
        // 图标2
        myChart1.setOption({
          xAxis: {
            type: 'category',
            data: ['5', '6', '7', '8', '9', '10', '11']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: ['', '', 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        })
    },
    test() {
      async function a() {
        await console.log('2')

        console.log('1')
      }
      a()
      console.log('3')
      console.log('3')
      console.log('3')
      console.log('3')
    }
  }
}
</script>

<style></style>

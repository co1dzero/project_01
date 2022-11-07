<template>
  <div>
    <div class="factor-handbox">
      <div class="manufactor-hand">计划判断</div>
    </div>
    <div class="manufactor-body">
      <div class="manufactor-body-search">
        <!-- 基础设置 -->
        <div>
          <h1 class="manufactor-title">● 基础设置</h1>
          <div class="mb-15 secondTitle">
            <span style="color: red">*</span>
            <span>选择商品：</span>
            <!-- 下拉框 -->
            <a-select
              mode="multiple"
              class="choose"
              placeholder=""
              @change="handleChange"
              @focus="choose"
            >
              <a-select-option v-for="item in commodity" :key="item.id">
                {{ item.name }}
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div class="mb-15">
          <!-- 下单规则配置 -->
          <div class="mb-15">
            <h1 class="manufactor-title">● 下单规则配置</h1>
            <button
              class="btn btn-primary"
              style="padding: 5px 23px"
              @click="addrule"
            >
              新增规则
            </button>
          </div>
          <!-- 下单时间设计表格 -->
          <div class="rules-box mb-10">
            <div ref="addtableRef"></div>
            <plandetermine_table
              v-for="item in list"
              :key="item.id"
            ></plandetermine_table>
          </div>
        </div>
      </div>
      <goodManage ref="manageRef" v-show="false"></goodManage>
    </div>
  </div>
</template>

<script>
import goodManage from '@/views/sellerCenter/goodManage/goodManage.vue'
import plandetermine_table from './planDetermine_table.vue'

export default {
  name: 'planDetermine',
  data() {
    return {
      list: [
        {
          id: 0,
        },
      ],
      // nextId: 5,
      commodity: [
        {
          id: 1,
          cl: '舟山接收站LNG',
        },
        {
          id: 2,
          cl: '中海油',
        },
        {
          id: 3,
          cl: '中石油',
        },
        {
          id: 4,
          cl: '如东',
        },
      ],
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    choose() {
      this.commodity = this.$refs.manageRef.data
      console.log(this.commodity)
    },
    // 添加规则
    addrule() {
      let max = 0
      this.list.forEach((element) => {
        if (element.id > max) {
          max = element.id
        }
      })
      const obj = { id: max + 1 }
      // console.log(obj)
      this.list.push(obj)
    },
  },
  components: {
    goodManage,
    plandetermine_table,
  },
}
</script>

<style lang="scss">
.factor-handbox {
  background-color: #fff;
  height: 40px;
  padding: 0 20px;
  margin-bottom: 10px;
  overflow: hidden;
}

.manufactor-hand {
  background-color: #fff;
  height: 20px;
  padding: 0 6px;
  margin-top: 10px;
  line-height: 20px;
  color: #005196;
  font-size: 16px;
  font-weight: 700;
  border-left: 5px solid #005196;
}

.manufactor-body {
  background-color: #fff;
  padding: 5px 0;

  .manufactor-body-search {
    padding: 25px 10px 0 30px;
    // border-bottom: 1px dashed #e2e2e2;
  }
}

.manufactor-title {
  color: #005196;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: 700;
}

.rules-box {
  padding: 15px 10px;
  background-color: #f2f2f2;
}

button {
  border: none;
}

.rules-table {
  width: 900px;
  text-align: center;
  background-color: #ffffff;
}
.rules-table th,
.rules-table td {
  font-weight: 400;
  padding: 15px;
  border: 1px solid #797979;
  border-collapse: collapse;
}
.secondTitle {
  font-weight: 100;
  font-size: 13px;
}
.choose {
  width: 300px;
}
</style>

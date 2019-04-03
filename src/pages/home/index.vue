<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="tabChange" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="deal"><router-link :to="{path:'/deal'}">处理中心</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="work"><router-link :to="{path:'/work'}">选项1</router-link></el-menu-item>
            <!-- <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-menu-item index="info">
            <router-link :to="{path:'/info'}">消息中心</router-link>
          </el-menu-item>
          <el-menu-item index="order"><router-link :to="{path:'/order'}">订单管理</router-link></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import deal from '@/pages/deal'
import info from '@/pages/info'
import order from '@/pages/order'
import work from '@/pages/work'
export default {
  name: 'home',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  components: {
    deal,
    info,
    order,
    work
  },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // mounted () {
  // },
  // created () {
  //   console.log('created')
  // },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    tabChange(key, keyPath) {
      // this.currentView = key;
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    a {
      display: inline-block;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }  
  body > .el-container {
    margin-bottom: 40px;
  }
}

</style>

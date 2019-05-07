<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container style="height: 500px; border: 1px solid #eee;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1"><router-link class="item" :to="{path: '/deal'}" exact replace>处理中心</router-link></el-menu-item>
                    <el-menu-item index="1-2"><router-link class="item" :to="{path: '/order'}" exact replace>订单管理</router-link></el-menu-item>
                </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
    name: 'home',
    data() {
    },
    methods: {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        // background-color: #D3DCE6;
        color: #333;
        // text-align: center;
        // line-height: 400px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 620px;
    }
}


// body>.el-container {
//     margin-bottom: 40px;
// }
</style>
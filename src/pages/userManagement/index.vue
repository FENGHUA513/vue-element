<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="用户信息">
        <div class="keyword">
          <div class="demo-input-suffix" style="margin-left:50px;">
            <span>用户名：</span>
            <el-input class="ele-input" placeholder="请输入内容" v-model="input1" clearable>
            </el-input>
          </div>
          <div class="demo-input-suffix" style="margin-left:50px;">
            <span>手机号：</span>
            <el-input class="ele-input" placeholder="请输入内容" v-model="input2" clearable>
            </el-input>
          </div>
          <div class="demo-input-suffix" style="margin-left:50px;">
            <span>工&nbsp;&nbsp;&nbsp;号：</span>
            <el-input class="ele-input" placeholder="请输入内容" v-model="input3" clearable>
            </el-input>
          </div>          
        </div>
        <div class="keyradio">
          <el-radio-group v-model="radio">
            <el-radio :label="3">所有类别人员</el-radio>
            <el-radio :label="6">系统管理员</el-radio>
            <el-radio :label="9">规程信息维护员</el-radio>
            <el-radio :label="1">规程操作员</el-radio>
          </el-radio-group>
        </div>
        <div class="search">
          <div class="demo-input-suffix" style="margin-left:110px;">
            <el-button type="primary">查询</el-button>
          </div>
        </div>
        <div class="content">
          <el-button type="primary" @click="addPerson">新增人员</el-button>
          <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
            <!-- <el-table-column align="center" prop="date" label="用户名">
            </el-table-column> -->
            <el-table-column align="center" prop="date" label="用户名">
              <template slot-scope="scope">
                <el-button @click="dialogUserInfo = true" type="text" size="small"></el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="name" label="具备的权限角色">
            </el-table-column>
            <el-table-column align="center" prop="province" label="手机号" width="120">
            </el-table-column>
            <el-table-column align="center" prop="city" label="工号" width="120">
            </el-table-column>
            <el-table-column align="center" prop="address" label="性别/生日年月">
            </el-table-column>
            <el-table-column align="center" label="操作" width="120">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                <el-button type="text" size="small">密码重置</el-button>
              </template>
            </el-table-column>
            <el-table-column align="center" label="日志信息" width="100">
              <template slot-scope="scope">
                <el-button @click="dialogViewLog = true" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination align="right" background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="日志信息">日志信息</el-tab-pane>
    </el-tabs>
    <el-dialog title="日志信息" :visible.sync="dialogViewLog" width="35%">
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogViewLog = false">关 闭</el-button>
      </div>
    </el-dialog>
    <el-dialog title="用户信息" :visible.sync="dialogUserInfo" width="35%">
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogUserInfo = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  // name: 'home',
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      radio: 3,
      dialogViewLog: false,
      dialogUserInfo: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  // components: {
  // },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // mounted () {
  // },
  // created () {
  //   console.log('created')
  // },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    addPerson() {
      console.log("addperson");
    }
    // viewLog() {
    //   console.log("查看日志");
    // }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
  line-height: 0;
}
div {
  .keyword {
    width: 100%;
    overflow: hidden;
    .demo-input-suffix {
      float: left;
      text-align: left;
      height: 32px;
      overflow: hidden;
      span {
        display: inline-block;
        width: 65px;
      }
      .ele-input {
        display: inline-block;
        width: 180px;
      }
    }
  }
  .keyradio {
    text-align: left;
    line-height: 50px;
    padding: 0 50px;
  }
  .search {
    text-align: right;
    padding: 0 300px;
  }
  .content {
    text-align: left;
    margin-top: 30px;
  }
  a {
    font-size: 50px;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
<template>
  <div>
    <div ref="container">
      <div class="keyword">
        <div class="demo-input-suffix" style="margin-left:100px;">
          <span>规程名：</span>
          <el-input class="ele-input" placeholder="请输入内容" v-model="input1" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix" style="margin-left:60px;">
          <span>规程类型：</span>
          <el-select v-model="typeValue" clearable placeholder="请选择">
            <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="demo-input-suffix" style="margin-left:110px;">
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      <div class="content">
        <el-button type="primary" @click="fileUpload">规程文件上传</el-button>
        <el-table :data="tableData" border style="width: 100%;margin:10px 0;">
          <el-table-column align="center" prop="date" label="规程名">
          </el-table-column>
          <el-table-column align="center" prop="name" label="规程类型" width="100">
          </el-table-column>
          <el-table-column align="center" prop="province" label="上传时间">
          </el-table-column>
          <el-table-column align="center" prop="city" label="最新更新时间">
          </el-table-column>
          <el-table-column align="center" prop="address" label="上传人/修改人">
          </el-table-column>
          <el-table-column align="center" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination align="right" background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <div ref="fileUpload" style="display: none;">
      <div class="selectFile">
        <h4>选择规程文件</h4>
        <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
          <el-button style="margin-left:50px;" slot="trigger" size="small" type="primary">选择文件</el-button>
          <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
        <el-button style="position: absolute;right:50px;bottom:30px;" size="small" type="success" @click="submitUpload">上传文件</el-button>
      </div>
      <div class="renderIcon"><i class="el-icon-house"></i></div>
      <div class="renderData"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      fileList: [],
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
      }],
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      typeOptions: [{
        value: 'run',
        label: '运行规程'
      }, {
        value: 'fault',
        label: '故障规程'
      }],
      typeValue: ''
    }
  },
  // components: {},
  // beforeCreate() {
  //     console.log('beforeCreate')
  // },
  // mounted() {},
  // created() {
  //     console.log('created')
  // },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleClick(row) {
      console.log(row);
    },
    fileUpload() {
      this.$refs.container.style.display = 'none';
      this.$refs.fileUpload.style.display = 'block';
    }
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
        width: 85px;
      }

      .ele-input {
        display: inline-block;
        width: 200px;
      }
    }
  }

  .content {
    text-align: left;
    margin-top: 30px;
  }

  .selectFile {
    position: relative;
    text-align: left;
    border: 1px solid #797979;
    height: 200px;
    overflow-y: scroll;
    h4 {
      font-weight: 700;
      line-height: 30px;
      margin-left: 10px;
    }
  }

  .renderIcon {
    font-size: 100px;
    color: #797979;
    margin: 10px 0;
    transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
  }

  .renderData {
    border: 1px solid #797979;
    height: 300px;
  }

  a {
    font-size: 50px;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
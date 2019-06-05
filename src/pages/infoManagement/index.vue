<template>
    <div>
        <div class="keyword">
            <div class="demo-input-suffix" style="margin-left:100px;">
                <span>规程名：</span>
                <el-input class="ele-input" placeholder="请输入内容" v-model="input1" clearable>
                </el-input>
            </div>
            <div class="demo-input-suffix" style="margin-left:60px;">
                <span>规程类型：</span>
                <el-select v-model="typeValue" placeholder="请选择">
                    <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="demo-input-suffix" style="margin-left:110px;">
                <el-button type="primary">查询</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        typeOptions: [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面'
        }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
        typeValue: ''
      }
    }
    // components: {},
    // beforeCreate() {
    //     console.log('beforeCreate')
    // },
    // mounted() {},
    // created() {
    //     console.log('created')
    // },
    // methods: {}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
    .keyword {
      width: 100%;
      height: 150px;
      background-color: pink;

      .demo-input-suffix {
        float: left;
        text-align: left;
        height: 32px;
        line-height: 0;
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

  a {
    font-size: 50px;
    color: red;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
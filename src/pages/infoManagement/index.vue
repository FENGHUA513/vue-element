<template>
  <div>
    <div v-if="showContent">
      <div class="keyword">
        <div class="demo-input-suffix" style="margin-left:100px;">
          <span>规程名：</span>
          <el-input class="ele-input" placeholder="请输入内容" v-model="regulationName" clearable>
          </el-input>
        </div>
        <div class="demo-input-suffix" style="margin-left:60px;">
          <span>规程类型：</span>
          <el-select v-model="regulationTypes" clearable placeholder="请选择">
            <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="demo-input-suffix" style="margin-left:110px;">
          <el-button type="primary" @click="searchRegulations">查询</el-button>
        </div>
      </div>
      <div class="content">
        <el-button type="primary" @click="fileUploadWord = true">上传规程word文档</el-button>
        <el-button type="primary" @click="fileUploadZip = true">导入规程数据文件</el-button>
        <el-button type="primary" @click="multipleExports = true">多个导出</el-button>
        <div v-if="multipleExports" style="float:right;">
          <el-radio-group v-model="documentForm">
            <el-radio label="word">word文档形式</el-radio>
            <el-radio label="zip">数据文件形式</el-radio>
          </el-radio-group>
          <el-button type="primary" @click="selectedDataExport">当前页选中记录导出</el-button>
          <el-button type="primary" @click="allSelectedDataExport">所有查询结果记录导出</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData" border style="width: 100%;margin:10px 0;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" align="center" width="55">
          </el-table-column>
          <el-table-column align="center" prop="id" label="id" width="100">
          </el-table-column>
          <el-table-column prop="dirName" label="文档详细信息所在目录名称" v-if="hideRow">
          </el-table-column>
          <el-table-column align="center" prop="name" label="规程名">
          </el-table-column>
          <el-table-column align="center" prop="edition" label="版次" width="100">
          </el-table-column>
          <el-table-column align="center" prop="fileCode" label="文档代码" width="100">
          </el-table-column>
          <el-table-column align="center" prop="regulationType" label="规程类型" width="100">
          </el-table-column>
          <el-table-column align="center" prop="uploadTime" label="上传时间">
          </el-table-column>
          <el-table-column align="center" prop="updateTime" label="最新更新时间">
          </el-table-column>
          <el-table-column align="center" label="操作" width="150">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="导出">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">导出成word文档</el-button>
              <el-button @click="exportDialog(scope.row)" type="text" size="small">导出成数据文件</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination align="right" background layout="prev, pager, next" :current-page="pageData.pageNo" :total="pageData.count" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
    <div v-else>
      <div class="renderData">
        <h4>规程编辑</h4>
        <div class="rules-edit">
          <el-row :gutter="20">
            <el-col :span="14" style="padding: 0;height: 1000px;">
              <div class="grid-content">
                <el-input v-model="input" style="width: 80%;display: block;margin:0 auto;"></el-input>
                <h1>1 参考文件</h1>
                <el-input type="textarea" :rows="5" v-model="textarea1" resize="none">
                </el-input>
                <h1>2 系统功能</h1>
                <el-input type="textarea" :rows="15" v-model="textarea2" resize="none">
                </el-input>
                <h1>3 系统设备</h1>
                <el-input type="textarea" :rows="5" v-model="textarea3" resize="none">
                </el-input>
                <h1>4 附件（正文）</h1>
                <el-input type="textarea" :rows="15" v-model="input" resize="none">
                </el-input>
              </div>
            </el-col>
            <el-col :span="5" style="padding: 0;height: 1000px;">
              <div class="grid-content bg-purple" style="background-color: #D7D7D7; overflow-y: auto;">
                <el-tree :data="treeData" node-key="id" :default-expanded-keys="[2, 5, 6, 3, 7, 8]" :props="defaultProps" @node-click="handleNodeClick" style="background: none;">
                </el-tree>
              </div>
            </el-col>
            <el-col :span="5" style="padding: 0;">
              <div class="grid-content">
                <h4>核对方式</h4>
                <div style="margin: 10px;">
                  <el-radio v-model="radio" label="1">标识状态核对</el-radio>
                </div>
                <div style="margin: 10px;">
                  <el-radio v-model="radio" label="2">人工核对</el-radio>
                </div>
                <h4 style="margin-top: 30px;">逻辑条件</h4>
                <div style="margin: 10px;">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-input v-model="input5"></el-input>
                    </el-col>
                    <el-col :span="6">
                      <el-select v-model="symbolValue" style="width:60px;">
                        <el-option v-for="item in symbolOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="6">
                      <el-input v-model="input6" style="width:60px;"></el-input>
                    </el-col>
                  </el-row>
                  <!-- <el-input v-model="input5" style="width:110px;"></el-input>
                  <el-select v-model="symbolValue" style="width:60px;">
                    <el-option v-for="item in symbolOptions" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                  <el-input v-model="input6" style="width:60px;"></el-input> -->
                </div>
                <div style="margin-top:50px;text-align: center;">
                  <el-button type="primary">保存</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 规程数据文件上传 -->
    <el-dialog title="选择要导入的规程数据文件包" :visible.sync="fileUploadZip" width="35%">
      <el-upload class="upload-demo" ref="uploadZip" :limit="1" action="/regulations/importzip" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :on-success="handleZipFileSuccess" :on-error="handleZipFileError"  :before-upload="beforeZipFileUpload">
        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="success" @click="submitUploadZip">上传文件</el-button>
      </div>
    </el-dialog>
    <!-- 规程word文档上传 -->
    <el-dialog title="选择规程word文档" :visible.sync="fileUploadWord" width="35%">
      <el-upload class="upload-demo" ref="uploadWord" :limit="1" action="/regulations/importWord" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" :on-success="handleZipFileSuccess" :on-error="handleZipFileError">
        <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" type="success" @click="submitUploadWord">上传文件</el-button>
      </div>
    </el-dialog>
    <el-dialog title="导出数据文件" :visible.sync="showDialogZip" width="35%" center>
      <el-form :model="dataZip">
        <el-form-item label="规程名" :label-width="formLabelWidth">
          <el-input v-model="dataZip.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="版次" :label-width="formLabelWidth">
          <el-input v-model="dataZip.edition" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="文档代码" :label-width="formLabelWidth">
          <el-input v-model="dataZip.fileCode" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="规程类型" :label-width="formLabelWidth">
          <el-input v-model="dataZip.regulationType" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="上传时间" :label-width="formLabelWidth">
          <el-input v-model="dataZip.uploadTime" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="最新修改时间" :label-width="formLabelWidth">
          <el-input v-model="dataZip.updateTime" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleExportZip(dataZip)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'home',
  data() {
    return {
      documentForm: 'word',
      pageData: {},
      hideRow: false,
      showContent: true,
      multipleExports: false,
      fileUploadZip: false,
      fileUploadWord: false,
      fileList: [],
      showDialogZip: false,
      dataZip: {},
      formLabelWidth: '120px',
      treeData: [{
        id: 1,
        label: '附件1.1号堆屏蔽冷却水系统充水排气',
        children: [{
          id: 4,
          label: '正文大项',
          children: [{
            id: 9,
            label: '正文核对项'
          }]
        }]
      }, {
        id: 2,
        label: '附件2.1号堆屏蔽冷却水系统充水排气',
        children: [{
          id: 5,
          label: '正文大项',
          children: [{
            id: 10,
            label: '正文核对项'
          }]
        }, {
          id: 6,
          label: '正文大项',
          children: [{
            id: 11,
            label: '正文核对项'
          }]
        }]
      }, {
        id: 3,
        label: '附件3.1号堆屏蔽冷却水系统充水排气',
        children: [{
          id: 7,
          label: '正文大项',
          children: [{
            id: 12,
            label: '正文核对项'
          }]
        }, {
          id: 8,
          label: '正文大项',
          children: [{
            id: 13,
            label: '正文核对项'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      tableData: [],
      multipIds: [],
      regulationName: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '1JNB20-AA01',
      input6: '关闭',
      radio: '1',
      input: '1#堆屏蔽冷却水系统运行规程',
      textarea1: 'HS0H0002900000900PR001  初步安全分析报告第九章',
      textarea2: '1号堆屏蔽冷却水系统用于完成以下基本功能',
      textarea3: '无',
      typeOptions: [{
        value: 'normal',
        label: '运行规程'
      }, {
        value: 'fault',
        label: '故障规程'
      }],
      regulationTypes: '',
      symbolOptions: [{
        value: 'equal',
        label: '='
      }, {
        value: 'greater',
        label: '>'
      }, {
        value: 'less',
        label: '<'
      }],
      symbolValue: 'equal'
    }
  },
  // components: {},
  // beforeCreate() {
  //     console.log('beforeCreate')
  // },
  // mounted() {},
  created() {
    this.renderList()
  },
  methods: {
    submitUploadZip() {
      this.$refs.uploadZip.submit();
      if (this.fileList.length < 1) {
        this.$message.success("请选择文件！");
      }
      this.fileUploadZip = false;
    },
    submitUploadWord() {
      this.$refs.uploadWord.submit();
      this.fileUploadWord = false;
    },
    handleZipFileError: function (err, file) {
      // alert("文件上传走丢了。。");
    },
    handleZipFileSuccess: function (res, file) {
      console.log(file)
      this.$message.success("上传文件成功！");
    },
    beforeZipFileUpload: function (file) {
      this.fileList.push(file)
      if (file.name.length != 21) {
        this.$message.error('请上传正确的压缩文件!');
        return false;
      }
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
    //删除数据
    handleDelete(row) {
      let that = this;
      this.$confirm('确认删除数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: false,
        center: true,
        type: 'warning'
      }).then(() => {
        axios({
          url: '/regulations/regulations',
          method: 'delete',
          params: {
            id: row.id
          }
        }).then(function (res) {
          that.$message.success("删除数据成功！");
          that.renderList()
        })
        .catch(function (error) {
          console.log(error);
        });
      }).catch(() => {
                 
      });
    },
    exportDialog(row) {
      this.showDialogZip = true;
      // console.log(row);
      this.dataZip = row;
    },
    handleExportZip(dataZip) {
      this.exportZip({ids: dataZip.id})
      this.showDialogZip = false;
    },
    //当前选中记录导出
    selectedDataExport() {
      let that = this;
      let ids = that.multipIds.join();
      this.$confirm('确认导出当前页的选中记录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: false,
        center: true,
        type: 'warning'
      }).then(() => {
        if (ids.length < 1) {
          this.$message.error('请选择数据!');
          return false;
        }
        switch (that.documentForm) {
          case 'word':
            that.exportZip(ids)
            break
          case 'zip':
            that.exportZip({ids: ids})
            break
          default:
            break
        }
      }).catch(() => {
                 
      });
    },
    //所有记录导出
    allSelectedDataExport() {
      let that = this;
      let ids = that.multipIds.join();
      this.$confirm('确认导出所有查询结果吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: false,
        center: true,
        type: 'warning'
      }).then(() => {
        switch (that.documentForm) {
          case 'word':
            that.exportZip(ids)
            break
          case 'zip':
            let params = {};
            if(that.regulationName) {
              params.name = that.regulationName
            } else {
              delete params['name']
            }
            if(that.regulationTypes) {
              params.regulationType = that.regulationTypes
            } else {
              delete params['regulationType']
            }
            that.exportZip(params)
            break
          default:
            break
        }
      }).catch(() => {
                 
      });
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleCurrentChange(curPage) {
      // console.log(curPage);
      this.pageData.pageNo = curPage
      this.renderList()
    },
    // 获取选中数据ids
    handleSelectionChange(val) {
      let multipleSelection = val;
      this.multipIds = [];
      multipleSelection.forEach(item => {
        this.multipIds.push(item.id)
      });      
    },
    exportZip(param) {
      axios({
        url: '/regulations/downloadzip',
        method: 'post',
        responseType: 'blob',
        data: qs.stringify(param)
      }).then(function (res) {
        console.log('res',res);
        let blob = new Blob([res.data], {type: 'application/zip;charset=utf-8'});
        let contentDisposition = res.headers['content-disposition'];
        let patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
        let result = patt.exec(contentDisposition);
        let filename = result[1];
        let downloadElement = document.createElement('a');
        let href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.style.display = 'none';
        downloadElement.href = href;
        downloadElement.download =filename.replace(/^\"|\"$/g,'') ; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放掉blob对象
      })
      .catch(function (error) {
        console.log(error);
      });

      // this.$request({
      //   url: '/regulations/downloadzip',
      //   method: 'post',
      //   responseType: 'blob',
      //   data: {
      //     ids: this.dataZip.id
      //   }
      // }).then((error) => {
      //   console.log('error')
      // }).catch((res) => {
      // })
    },
    //查询规程列表
    searchRegulations() {
      this.renderList()
    },
    renderList() {
      let search = {
        pageNo: this.pageData.pageNo || 1,
        pageCount: 10
      };
      if(this.regulationName) {
        search.name = this.regulationName
      } else {
        delete search['name']
      }
      if(this.regulationTypes) {
        search.regulationType = this.regulationTypes
      } else {
        delete search['regulationType']
      }

      this.$request({
        url: '/regulations/regulationsPage',
        method: 'get',
        data: search
      }).then((res) => {  //pageData
        let result = res.data.regulations.list;
        this.pageData.count = res.data.regulations.count;   //总记录数
        this.pageData.pageNo = res.data.regulations.pageNo;   //当前页码
        // this.pageData.pageSize = res.data.regulations.pageSize; //总页数
        // this.pageData.pageCount = res.data.regulations.pageCount;//每页的数据条数
        if (result instanceof Array && result.length > 0) {
          this.tableData = result;
        }
      }).catch((error) => {
        console.log(error)
      })
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
        width: 200px;
      }
    }
  }
  .content {
    text-align: left;
    margin-top: 30px;    
  }
  .renderData {
    border: 1px solid #797979;
    // height: 750px;
    text-align: left;
    h4 {
      font-weight: 700;
      line-height: 30px;
      margin-left: 10px;
    }
    .rules-edit{
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      h1 {
        font-size:24px;
        line-height: 40px;
      }
      .el-row {
        // margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
          // height: 1000px;
        }
        .bg-purple {
          background: #d3dce6;
        }
        .grid-content {
          height: 100%;
        }
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
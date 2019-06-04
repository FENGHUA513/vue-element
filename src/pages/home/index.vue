<template>
    <div>
        <el-container>
            <el-header>
                <img src="./image/logo.svg" alt="">
                <div>
                    <span id="user">冀晶晶</span>
                    <el-button type="text" @click="dialogFormVisible = true"><i class="el-icon-setting"></i></el-button>
                </div>
            </el-header>
            <el-container style="height: 500px; border: 1px solid #eee;">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">
                                    <router-link class="item" :to="{path: '/deal'}" exact replace>处理中心</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link class="item" :to="{path: '/order'}" exact replace>订单管理</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-dialog title="人员信息" :visible.sync="dialogFormVisible" width="35%">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth">
                    <el-select v-model="sexValue" placeholder="请选择性别">
                        <el-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="生日年月" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工号" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="首主界面" :label-width="formLabelWidth">
                    <el-select v-model="moduleValue" placeholder="请选择模块">
                        <el-option v-for="item in moduleOptions" :key="item.value" :value="item.value" :label="item.label">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="登录密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            sexOptions: [{
                value: 'man',
                label: '男'
            }, {
                value: 'woman',
                label: '女'
            }],
            sexValue: 'man',
            
            moduleOptions: [{
                value: 'defend',
                label: '规程信息维护'
            }, {
                value: 'edit',
                label: '规程信息编辑'
            }],
            moduleValue: 'defend',

            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        };
    },
    methods: {

    },
    created() {
        this.$request({
            url: '/api/list',
            method: 'get'
        }).then((res) => {
            // 成功返回
        }).catch((res) => {
            // 错误返回
        })
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

        img {
            width: 100px;
        }

        div {
            float: right;
            width: 150px;
            height: 100%;

            i {
                font-size: 40px;
                cursor: pointer;
                vertical-align: middle;
            }
        }
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
</style>
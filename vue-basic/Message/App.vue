<template>
    <div>
        <button @click="show">弹框</button>


        <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
            <el-table-column align="center" header-align="center" prop="OrgName" label="所属单位"></el-table-column>

            <el-table-column align="center" header-align="center" label="可用份数">
                <template slot-scope="{row}">
                    <div>{{row.TemplateIdText}} {{row.UsableNum}} 份 </div>
                </template>
            </el-table-column>
            <el-table-column align="center" header-align="center" label="限制份数">
                <template slot-scope="{row}">
                    <div>{{row.TemplateIdText}} {{row.LimitNum == -1 ? '不限' : `${row.LimitNum} 份 `}} </div>
                </template>
            </el-table-column>
            <el-table-column align="center" header-align="center" label="操作" width="160">
                <template slot-scope="scope">
                    <el-button type="text" size="mini" v-if="true" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="text" size="mini" v-if="true" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>



        <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>





    </div>
</template>
<script>
//import Vue from 'vue'
//import ZfUI  from './Message'
//Vue.use(ZfUI)       // use方法使用的时候，默认会调用内部的install方法
export default {
    data(){
        return{
            tableData:[
            {
                "OrgId":77,
                "TemplateId":1,
                "BillingOrgId":1,
                "OrgLevelPath":"1,77,",
                "UsedNum":0,
                "LimitNum":1231,
                "IsSpecial":true,
                "TemplateIdText":"境内游",
                "OrgName":"根号门店",
                "UsableNum":0,
                "BuyedNum":0
            },
            {
                "OrgId":77,
                "TemplateId":2,
                "BillingOrgId":1,
                "OrgLevelPath":"1,77,",
                "UsedNum":0,
                "LimitNum":5432323,
                "IsSpecial":true,
                "TemplateIdText":"出境游",
                "OrgName":"根号门店",
                "UsableNum":0,
                "BuyedNum":0
            },
            {
                "OrgId":77,
                "TemplateId":3,
                "BillingOrgId":1,
                "OrgLevelPath":"1,77,",
                "UsedNum":0,
                "LimitNum":8881,
                "IsSpecial":true,
                "TemplateIdText":"一日游",
                "OrgName":"根号门店",
                "UsableNum":0,
                "BuyedNum":0
            },
            {
                "OrgId":77,
                "TemplateId":4,
                "BillingOrgId":1,
                "OrgLevelPath":"1,77,",
                "UsedNum":0,
                "LimitNum":87611,
                "IsSpecial":true,
                "TemplateIdText":"赴台游",
                "OrgName":"根号门店",
                "UsableNum":0,
                "BuyedNum":0
            },
            {
                "OrgId":77,
                "TemplateId":5,
                "BillingOrgId":1,
                "OrgLevelPath":"1,77,",
                "UsedNum":0,
                "LimitNum":999,
                "IsSpecial":true,
                "TemplateIdText":"代订代办",
                "OrgName":"根号门店",
                "UsableNum":0,
                "BuyedNum":0
            },
            {
                "OrgId":78,
                "TemplateId":1,
                "BillingOrgId":1,
                "OrgLevelPath":"1,78,",
                "UsedNum":0,
                "LimitNum":112,
                "IsSpecial":true,
                "TemplateIdText":"境内游",
                "OrgName":"华山大社直属门店",
                "UsableNum":0,
                "BuyedNum":0,
            }
        ],
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods:{
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            console.log(row, column, rowIndex, columnIndex)
            let num = 0
            if (columnIndex === 0) {
                for (let i = 0; i < this.tableData.length; i++) {
                    if (row.OrgId === this.tableData[i].OrgId) {
                        num++
                    }
                }
                if (num == 1) {
                    return {
                        rowspan: num,
                        colspan: 1
                    }
                } else if (num > 1) {
                    if (this.tableData[rowIndex - 1] && row.OrgId === this.tableData[rowIndex - 1].OrgId) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    } else {
                        return {
                            rowspan: num,
                            colspan: 1
                        }
                    }
                }
            }
            if(columnIndex === 3 ){
                for (let i = 0; i < this.tableData.length; i++) {
                    if (row.OrgId === this.tableData[i].OrgId) {
                        num++
                    }
                }
                if (num == 1) {
                    return {
                        rowspan: num,
                        colspan: 1
                    }
                } else if (num > 1) {
                    if (this.tableData[rowIndex - 1] && row.OrgId === this.tableData[rowIndex - 1].OrgId) {
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    } else {
                        return {
                            rowspan: num,
                            colspan: 1
                        }
                    }
                }
            }
        },
        show(){
            // Message.success({
            //     message: '你好',
            //     duration: 3000
            // })

            this.$message.success({
                message: '你好',
                duration: 3000
            })

        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    }
    
}
</script>
<template>
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="id" label="id"  width="60"/>
      <el-table-column prop="type" label="type"  width="60"/>
      <el-table-column prop="name" label="name"  width="140"/>
      <el-table-column prop="platform" label="platform"  width="60"/>
      <el-table-column prop="count" label="count"  width="60"/>
      <el-table-column prop="amount" label="amount"  width="60"/>
      <el-table-column prop="perLimit" label="perLimit"  width="60"/>
      <el-table-column prop="minPoint" label="minPoint"  width="60"/>
      <el-table-column prop="startTime" label="startTime"  width="280"/>
      <el-table-column prop="endTime" label="endTime"  width="280"/>
      <el-table-column prop="useType" label="useType"  width="60"/>
      <el-table-column prop="note" label="note"  width="60"/>
      <el-table-column prop="publishCount" label="publishCount"  width="60"/>
      <el-table-column prop="useCount" label="useCount"  width="60"/>
      <el-table-column prop="receiveCount" label="receiveCount"  width="60"/>
      <el-table-column prop="enableTime" label="enableTime"  width="280"/>
      <el-table-column prop="code" label="code"  width="100"/>
      <el-table-column prop="memberLevel" label="memberLevel"  width="60"/>
    <el-table-column fixed="right" label="Operations" width="240">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="update(0,scope.row)">update</el-button>
        <el-button link type="primary" size="small" @click="remove(scope.row)">remove</el-button>
      </template>
    </el-table-column>
  </el-table>
<!--分页按键-->
<div class="demo-pagination-block">
    <div class="demonstration">Jump to</div>
    <el-pagination
      v-model:current-page="page"
      v-model:page-size="pageSize3"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="totaldata"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @click="jumper"
    />
  </div>
<!---->
<el-dialog v-model="dialogFormVisible" title="update" >
    <el-form :model="record">
      <el-form-item label="id" :label-width="formLabelWidth"><el-input v-model="record.id" autocomplete="off" /></el-form-item>
      <el-form-item label="type" :label-width="formLabelWidth"><el-input v-model="record.type" autocomplete="off" /></el-form-item>
      <el-form-item label="name" :label-width="formLabelWidth"><el-input v-model="record.name" autocomplete="off" /></el-form-item>
      <el-form-item label="platform" :label-width="formLabelWidth"><el-input v-model="record.platform" autocomplete="off" /></el-form-item>
      <el-form-item label="count" :label-width="formLabelWidth"><el-input v-model="record.count" autocomplete="off" /></el-form-item>
      <el-form-item label="amount" :label-width="formLabelWidth"><el-input v-model="record.amount" autocomplete="off" /></el-form-item>
      <el-form-item label="perLimit" :label-width="formLabelWidth"><el-input v-model="record.perLimit" autocomplete="off" /></el-form-item>
      <el-form-item label="minPoint" :label-width="formLabelWidth"><el-input v-model="record.minPoint" autocomplete="off" /></el-form-item>
      <el-form-item label="startTime" :label-width="formLabelWidth"><el-input v-model="record.startTime" autocomplete="off" /></el-form-item>
      <el-form-item label="endTime" :label-width="formLabelWidth"><el-input v-model="record.endTime" autocomplete="off" /></el-form-item>
      <el-form-item label="useType" :label-width="formLabelWidth"><el-input v-model="record.useType" autocomplete="off" /></el-form-item>
      <el-form-item label="note" :label-width="formLabelWidth"><el-input v-model="record.note" autocomplete="off" /></el-form-item>
      <el-form-item label="publishCount" :label-width="formLabelWidth"><el-input v-model="record.publishCount" autocomplete="off" /></el-form-item>
      <el-form-item label="useCount" :label-width="formLabelWidth"><el-input v-model="record.useCount" autocomplete="off" /></el-form-item>
      <el-form-item label="receiveCount" :label-width="formLabelWidth"><el-input v-model="record.receiveCount" autocomplete="off" /></el-form-item>
      <el-form-item label="enableTime" :label-width="formLabelWidth"><el-input v-model="record.enableTime" autocomplete="off" /></el-form-item>
      <el-form-item label="code" :label-width="formLabelWidth"><el-input v-model="record.code" autocomplete="off" /></el-form-item>
      <el-form-item label="memberLevel" :label-width="formLabelWidth"><el-input v-model="record.memberLevel" autocomplete="off" /></el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="planeno">Cancel</el-button>
        <el-button type="primary" @click="planeok">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";
import { ElMessage } from 'element-plus'
export default defineComponent({
  data() {
      return {
        save:true,
        page:1,
        totaldata:10,
        dialogFormVisible:false,
        "records": [],
        record : {
          "id": 0,
          "type": 0,
          "name": "",
          "platform": 0,
          "count": 0,
          "amount": 0,
          "perLimit": 0,
          "minPoint": 0,
          "startTime": "",
          "endTime": "",
          "useType": 0,
          "note": null,
          "publishCount": 0,
          "useCount": 0,
          "receiveCount": 0,
          "enableTime": "",
          "code": null,
          "memberLevel": null
        },
    }
  },
  methods: {
    //分页
    getpage(current_a,size_a){
        const that=this;
        axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon/page',
            data:{
                current:current_a,
                size:size_a
            }
        }).then(function (response) {
            that.records = response.data.data.page.records
            that.totaldata = response.data.data.page.total
        })
    },
    //查询
    jumper(){
        this.getpage(this.page,5);
    },
    //请求修改
    Demandeupdate(){
      axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon/edit',
            data:this.record
        }).then(function (response) {
          if (response.data.success) {
            ElMessage({ message: '操作成功.',type: 'success',})
          }else{
            ElMessage({ message: '操作失败',type: 'error',})
          }
        })
    },
    //请求删除
    Demanderemove(id){
      axios({
            method: 'get',
            url: 'http://mall.qzimp.cn/mall/sms-coupon/del/'+id,
        }).then(function (response) {
          console.log(response.data.success);
          if (response.data.success) {
            ElMessage({ message: '操作成功.',type: 'success',})
          }else{
            ElMessage({ message: '操作失败',type: 'error',})
          }
        })
    },
    //请求添加
    Demandeadd(){
      axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon/add',
            data:this.record
        }).then(function (response) {
          if (response.data.success) {
            ElMessage({ message: '操作成功.',type: 'success',})
          }else{
            ElMessage({ message: '操作失败',type: 'error',})
          }
        })
    },
    //面板------------------------------------------------------------------------------
    //面板打开
    update(lex,data){
        console.log(data);
        this.lex = lex
        if (lex==0) {
          this.record = data
        }else{
          this.record = {
          "id": 0,
          "type": 0,
          "name": "",
          "platform": 0,
          "count": 0,
          "amount": 0,
          "perLimit": 0,
          "minPoint": 0,
          "startTime": "",
          "endTime": "",
          "useType": 0,
          "note": null,
          "publishCount": 0,
          "useCount": 0,
          "receiveCount": 0,
          "enableTime": "",
          "code": null,
          "memberLevel": null
        }
        }
        this.dialogFormVisible = !this.dialogFormVisible
    },
    //
    planeok(){
      if (this.lex == 0) {
        this.Demandeupdate()
      }else{
        this.Demandeadd()
      }
      this.dialogFormVisible = !this.dialogFormVisible
      location.reload()
      this.$router.go(0)
    },
    planeno(){
      this.dialogFormVisible = !this.dialogFormVisible
    },
    //删除
    remove(data){
      this.Demanderemove(data.id)
      location.reload()
      this.$router.go(0)
    },
  },
  mounted(){
    this.getpage(this.page,5);
  }
});
</script>

<template>
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="id" label="id" width="80" />
      <el-table-column prop="couponId" label="couponId" width="80" />
      <el-table-column prop="memberId" label="memberId" width="80" />
      <el-table-column prop="couponCode" label="couponCode"  width="180"/>
      <el-table-column prop="memberNickname" label="memberNickname" width="80" />
      <el-table-column prop="getType" label="getType" width="80" />
      <el-table-column prop="createTime" label="createTime" width="200" />
      <el-table-column prop="useStatus" label="useStatus"  width="60"/>
      <el-table-column prop="useTime" label="useTime" width="250"/>
      <el-table-column prop="orderId" label="orderId" width="70" />
      <el-table-column prop="orderSn" label="orderSn" width="70" />

      <el-table-column fixed="right" label="Operations" width="150">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="update(0,scope.row)">update</el-button>
        <el-button link type="primary" size="small" @click="remove(scope.row)">remove</el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="update(1,0)">add</el-button>
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

<!--对话框-->
<el-dialog v-model="dialogFormVisible" title="update" >
    <el-form :model="record">
      <el-form-item label="id" :label-width="formLabelWidth"><el-input v-model="record.id" autocomplete="off" /></el-form-item>
      <el-form-item label="couponId" :label-width="formLabelWidth"><el-input v-model="record.couponId" autocomplete="off" /></el-form-item>
      <el-form-item label="memberId" :label-width="formLabelWidth"><el-input v-model="record.memberId" autocomplete="off" /></el-form-item>
      <el-form-item label="couponCode" :label-width="formLabelWidth"><el-input v-model="record.couponCode" autocomplete="off" /></el-form-item>
      <el-form-item label="memberNickname" :label-width="formLabelWidth"><el-input v-model="record.memberNickname" autocomplete="off" /></el-form-item>
      <el-form-item label="getType" :label-width="formLabelWidth"><el-input v-model="record.getType" autocomplete="off" /></el-form-item>
      <el-form-item label="createTime" :label-width="formLabelWidth"><el-input v-model="record.createTime" autocomplete="off" /></el-form-item>
      <el-form-item label="useStatus" :label-width="formLabelWidth"><el-input v-model="record.useStatus" autocomplete="off" /></el-form-item>
      <el-form-item label="useTime" :label-width="formLabelWidth"><el-input v-model="record.useTime" autocomplete="off" /></el-form-item>
      <el-form-item label="orderId" :label-width="formLabelWidth"><el-input v-model="record.orderId" autocomplete="off" /></el-form-item>
      <el-form-item label="orderSn" :label-width="formLabelWidth"><el-input v-model="record.orderSn" autocomplete="off" /></el-form-item>
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
        lex:0,
        save:true,
        dialogFormVisible:false,
        page:1,
        totaldata:10,
        "records": [],
        record:{
          "id": 0,
          "couponId": 0,
          "memberId": 0,
          "couponCode": "",
          "memberNickname": "",
          "getType": 1,
          "createTime": "0",
          "useStatus": 0,
          "useTime": "0",
          "orderId": null,
          "orderSn": null
        },
    }
  },
  methods: {
    //请求分页
    getpage(current_a,size_a){
        const that=this;
        axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon-history/page',
            data:{
                current:current_a,
                size:size_a
            }
        }).then(function (response) {
            that.records = response.data.data.page.records
            that.totaldata = response.data.data.page.total
        })
    },
    //查询0
    jumper(){
        this.getpage(this.page,5);
    },
    //请求修改
    Demandeupdate(){
      axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon-history/edit',
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
            url: 'http://mall.qzimp.cn/mall/sms-coupon-history/del/'+id,
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
            url: 'http://mall.qzimp.cn/mall/sms-coupon-history/add',
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
        this.lex = lex
        if (lex==0) {
          this.record = data
        }else{
          this.record = {
          "id": 0,
          "couponId": 0,
          "memberId": 0,
          "couponCode": "",
          "memberNickname": "",
          "getType": 1,
          "createTime": "0",
          "useStatus": 0,
          "useTime": "0",
          "orderId": null,
          "orderSn": null
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
    this.getpage(this.page,10);
  }
});
</script>

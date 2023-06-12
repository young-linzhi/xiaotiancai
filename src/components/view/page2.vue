<template>
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="id" label="id"  width="180"/>
      <el-table-column prop="couponId" label="couponId"  width="180"/>
      <el-table-column prop="productCategoryId" label="productCategoryId"  width="180"/>
      <el-table-column prop="productCategoryName" label="productCategoryName"  width="280"/>
      <el-table-column prop="parentCategoryName" label="parentCategoryName"  width="280"/>

      <el-table-column fixed="right" label="Operations" width="340">
        <template #default="scope">
          <el-button type="primary" plain @click="update(0,scope.row)">Primary</el-button>
          <el-button type="danger" plain @click="remove(scope.row)">Danger</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-button type="primary">Upload<el-icon class="el-icon--right" @click="update(1,0)"> <Upload/></el-icon> </el-button>
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
      <el-form-item label="couponId" :label-width="formLabelWidth"><el-input v-model="record.couponId" autocomplete="off" /></el-form-item>
      <el-form-item label="productCategoryId" :label-width="formLabelWidth"><el-input v-model="record.productCategoryId" autocomplete="off" /></el-form-item>
      <el-form-item label="productCategoryName" :label-width="formLabelWidth"><el-input v-model="record.productCategoryName" autocomplete="off" /></el-form-item>
      <el-form-item label="parentCategoryName" :label-width="formLabelWidth"><el-input v-model="record.parentCategoryName" autocomplete="off" /></el-form-item>
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
        lex:0,
        dialogFormVisible:false,
        page:1,
        totaldata:10,
        "records": [],
         record : {
          "id": 0,
          "couponId": 0,
          "productCategoryId": 0,
          "productCategoryName": "0",
          "parentCategoryName": "0"
        }

    }
  },
  methods: {
    //分页
    getpage(current_a,size_a){
        const that=this;
        axios({
            method: 'post',
            url: 'http://mall.qzimp.cn/mall/sms-coupon-product-category-relation/page',
            data:{
                current:current_a,
                size:size_a
            }
        }).then(function (response) {
          console.log(response);
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
        url: 'http://mall.qzimp.cn/mall/sms-coupon-product-category-relation/edit',
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
        url: 'http://mall.qzimp.cn/mall/sms-coupon-product-category-relation/del/'+id,
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
        url: 'http://mall.qzimp.cn/mall/sms-coupon-product-category-relation/add',
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
          "productCategoryId": 0,
          "productCategoryName": "",
          "parentCategoryName": ""
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

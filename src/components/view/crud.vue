<template>
    <el-table :data="records" style="width: 100%">
      <el-table-column prop="id" label="Date" width="180" />
      <el-table-column prop="couponId" label="Name" width="180" />
      <el-table-column prop="memberId" label="Address" />
      <el-table-column prop="couponCode" label="Address" />
      <el-table-column prop="memberNickname" label="Address" />
      <el-table-column prop="getType" label="Address" />
      <el-table-column prop="createTime" label="Address" />
      <el-table-column prop="useStatus" label="Address" />
      <el-table-column prop="useTime" label="Address" />
      <el-table-column prop="orderId" label="Address" />
      <el-table-column prop="orderSn" label="Address" />
    </el-table>
<!--∑÷“≥∞¥º¸-->
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
        centerDialogVisible:false,
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
    //∑÷“≥
    getpage(current_a,size_a){
        const that=this; 
        axios({
            method: 'post',
            url: 'http://mall.qzimp.cn//mall/sms-coupon-history/page',
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
  },
  mounted(){
    this.getpage(this.page,10);
  }
});
</script>
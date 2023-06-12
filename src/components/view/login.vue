<template>
  <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
      <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" prefix-icon="Message" />
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
          <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入你的用户密码"
              prefix-icon="NoSmoking" />
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="btnLogin(ruleFormRef)">用户登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
  </el-form>
</template>
<script>
import { defineComponent } from 'vue'
import  { useCounterStore } from '../../pinia/store.js'
import axios from 'axios';
export default defineComponent({
  setup(){
  },
  data() {
      return {
          userForm: {
              email: '',
              password: '',
          },
          rules: {
              email: [
                  { required: true, message: '请输入正确的电子邮箱', trigger: 'blur' },
                  { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' },
              ],
              password: [
                  { required: true, message: '请输入正确的用户密码（8-16）', trigger: 'blur' },
                  { min: 8, message: '输入字符不宜少于8个', trigger: 'blur' },
                  { max: 16, message: '输入字符不宜多于16个', trigger: 'blur' },
              ]
          }
      }
  },
  methods: {
      btnLogin() {
        const sta = useCounterStore();
        const that = this;
        axios({
            method: 'post',
            url: 'http://api.jqrjq.cn/api/mobile/elogin',
            data:{
              email: that.userForm.email,
              password: that.userForm.password,
            }
        }).then(function (response) {
          if (response.data.success) {
            sta.setToken(response.data.data.userinfo.token)
            
            that.$router.push('/main')
          }
            
        }) 
      },
      resetForm() { 
          const formEl = this.$refs.ruleFormRef
          formEl.resetFields()
      },
  }
});
</script>

<template>
    <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="item in 6" :key="item"></el-carousel-item>
  </el-carousel>
  <el-button @click="btnLogin">进入</el-button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    methods: {
        btnLogin() {
            const that = this
            that.$router.push('/show')
        },
}
});
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(1n) {
  background: url("../../images/1.png");
}

.el-carousel__item:nth-child(2n) {
  background: url("../../images/2.jpg");
}

.el-carousel__item:nth-child(3n) {
  background: url("../../images/3.png");
}
</style>

<template>
    <div class="block text-center" style="height: 470px">
    <el-carousel height="auto" autoplay>
      <el-carousel-item style="height: 470px">
        <h3 class="small justify-center" text="2xl">height 100px</h3>
      </el-carousel-item>
      <el-carousel-item style="height: 470px">
        <h3 class="small justify-center" text="2xl">height 200px</h3>
      </el-carousel-item>
      <el-carousel-item style="height: 470px">
        <h3 class="small justify-center" text="2xl">height 300px</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
</script>

<style scoped>
.el-carousel__item:nth-child(1n) {
  background-image: url(../../images/1.png);
  background-repeat: no-repeat;
  background-size:100% 100%;
}
.el-carousel__item:nth-child(2n) {
  background-image: url(../../images/2.jpg);
  background-repeat: no-repeat;
  
  background-size:100% 100%;
}
.el-carousel__item:nth-child(3n) {
  background-image: url(../../images/3.png);
  background-repeat: no-repeat;
 
  background-size:100% 100%;
}
</style>